import React from 'react'
import {IoShirtOutline} from 'react-icons/io'
import {AiFillHeart} from 'react-icons/ai'

const Card = (props) => {
  return (
    <div className='card'>
        <div className='movie-box'>
            <IoShirtOutline />
        </div>
        <div className='movie-info'>
            <h1>{props.title}</h1>
            <AiFillHeart />
        </div>
        <h2>{props.year}</h2>
    </div>
  )
}

export default Card