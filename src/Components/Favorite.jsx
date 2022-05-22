import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card'

const Favorite = (props) => {
  const data = useSelector(state => state.favorite);
	const dispatch = useDispatch();
  
  return (
    <div className="fav">
      <h1>Favorite List</h1>   
    </div>
  );
};

export default Favorite