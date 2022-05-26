import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux';
import Card from './Card'

const mapStateToProps = (state) => ({
  favoriteMovies: state,
});

const Favorite = (props) => {
   // const favorite = useSelector(state => state.favorite);
  // const dispatch = useDispatch();

  // const [fav, setFav] = useState([]);

  // const loadMovies = useCallback(() => {dispatch({ type: 'ADD_FAVORITE', payload: props })}, [dispatch]);
  
  // useEffect(() => {
  //   loadMovies();
  // }, [loadMovies]);

  //Object.keys(props.favoriteMovies).map((key) => props.favoriteMovies[key].map((movie) => console.log(movie)))

  
  
  // let json = JSON.stringify(props.favoriteMovies)
  // console.log("json" + json)

  const [fav, setFav] = useState([]);
  Object.keys(props.favoriteMovies).map((key) => props.favoriteMovies[key].map((movie) => console.log(movie)))

  useEffect(() => {
    setFav(Object.keys(props.favoriteMovies).map((key) => props.favoriteMovies[key]));
  }, [props.favoriteMovies]);

  console.log("fav"+fav)
  

//   // load object keys and map through them
//    Object.keys(props.favoriteMovies).map((key) => {
//   // map through the array of objects
//   props.favoriteMovies[key].map((movie) => {
//     console.log(movie)
//     console.log(movie.title)
//     console.log(movie.description)
//     console.log(movie.year)
//     console.log(movie.poster)
//     console.log(movie.rating)
//     console.log(movie.trailer)
//   })
// })
  

  return (
    <div className="fav">
      <h1>Favorite List</h1>
      <div className="movie-list">
        {/* {fav.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            description={movie.description}
            year={movie.year}
            poster={movie.poster}
            rating={movie.rating}
            trailer={movie.trailer}
          />
        ))} */}

        {Object.keys(props.favoriteMovies).map((key) => props.favoriteMovies[key].map((movie) => <Card
          key={movie.id}
          title={movie.title}
          description={movie.description}
          year={movie.year}
          poster={movie.poster}
          rating={movie.rating}
          trailer={movie.trailer}
          />
          ))}
      </div>
    </div>
  );
};

// export default Favorite
export default connect(mapStateToProps)(Favorite);