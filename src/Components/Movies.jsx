import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'
import { useParams } from 'react-router-dom';

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  
  const getData = () => {
    axios
      .get("http://localhost:3000/movies")
      .then((result) => {
        setMovies(result.data.data);
        // console.log(result);
        // console.log(result.data.data.at(0)._id);
        // console.log(movies.at(0)._id);
        // console.log(result.data[0]._id);
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  };
  useEffect(() => {
    getData();  
  }, []);
    
  let { search } = useParams();
  const pathname = window.location.pathname;
  
  useEffect(() => {
    if (pathname === "/Search=" + search) {
      setMovies(movies.filter((movie) => movie.title.includes(search)));
    }else{
      <></>
    }
  }, [movies, pathname, search]);

  return (
    <div className='movie-list'>
        {movies.map((movie) => (
          <Card title={movie.title} description = {movie.description} year = {movie.year} poster = {movie.poster} rating = {movie.rating} trailer = {movie.trailer} />
        ))} 
    </div>
  )
}

export default Movies