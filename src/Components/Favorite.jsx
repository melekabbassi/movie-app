import React from 'react'

const Favorite = (props) => {
    
  return props.movies.map((movie) => (
    <div className="favorite">
        <img src={movie.poster} alt="poster" />
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>{movie.genre}</p>
        <p>{movie.rating}</p>
    </div>
  ));
}

export default Favorite