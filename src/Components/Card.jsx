import React from 'react'
import FavBtn from './FavBtn'
import { useState, useEffect } from 'react';

const Card = (props) => {
  const [favorite, setFavorite] = useState(null);
    {/* movie card to have the title and poster of movies */}
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.poster} alt={props.title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">title: {props.title}</h3>
        <p className="card-subtitle">year: {props.year}</p>
        <p className="card-description">description: {props.description}</p>
        <p className="card-rating"> rating: {props.rating}</p>
      </div>
      <div className="card-action">
        <FavBtn favorite={favorite} setFavorite={setFavorite} />
      </div>
    </div>
  );
}

export default Card