import React from 'react'
// import FavBtn from './FavBtn'
import Star from '@mui/icons-material/Star';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Card = (props) => {
	
	const favorite = useSelector(state => state.favorite);
	const dispatch = useDispatch();

  return (
    <div className="hero-container">
		<div className="main-container">
			<div className="poster-container">
				<img src={props.poster} alt={props.title} className="images" />
			</div>
			<div className="card-container">
				<div className="card-content">
					<h4 className="card-title">{props.title}</h4>
          			<p className="card-release">{props.year}</p>
					<p className="card-rating">Rating: {props.rating}</p>
					<button className='fav-button-wrapper' onClick={() => dispatch({ type: 'ADD_FAVORITE', payload: props })}>
						<Star className='fav-button-icon' />
						
					</button>
				</div>
			</div>
		</div>
		{console.log(props.title)}
	</div>
	
  );
}

export default Card