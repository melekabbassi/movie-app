import React from 'react'
import FavBtn from './FavBtn'
import { useState } from 'react';

const Card = (props) => {
  const [favorite, setFavorite] = useState([]);

  const addFavorite = (movie) => {
    setFavorite([...favorite, movie]);
    console.log(favorite);
  };

  return (
    <div class="hero-container">
		<div class="main-container">
			<div class="poster-container">
				<img src={props.poster} alt={props.title} className="images" />
			</div>
			<div className="card-container">
				<div className="card-content">
					<h4 className="card-title">{props.title}</h4>
          <p className="card-release">{props.year}</p>
					<p className="card-rating">Rating: {props.rating}</p>
          <FavBtn favorite={favorite} setFavorite={addFavorite} />
				</div>
			</div>
		</div>
	</div>
  );
}

export default Card