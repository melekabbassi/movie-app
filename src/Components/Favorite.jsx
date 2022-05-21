import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

const Favorite = (props) => {
  const data = useSelector(state => state.favorite);
	const dispatch = useDispatch();

  

  return (
    <div className="fav">
      <h1>Favorite List</h1>

      {/* {props.favorite.map(item => (
        <div className="fav-item">
          <div className="fav-item-content">
            <h3>{item.title}</h3>
            <p>{item.year}</p>
            <p>{item.rating}</p>
          </div>
          <div className="fav-item-icon">
            <button
              className="fav-item-icon-button"
              onClick={() => dispatch({ type: 'REMOVE_FAVORITE', payload: item.id })}
            >
              Remove
            </button>
          </div>
        </div>
      ))} */}
    </div>
      

  );
};

export default Favorite