import React from 'react'
import {IoShirtOutline} from 'react-icons/io'
import {AiFillHeart} from 'react-icons/ai'
import { useContext } from 'react'
import FavoriteContext from '../FavoriteContext'

const Card = ({title, year}) => {

    const {addToFavorite} = useContext(FavoriteContext);

  return (
    <div className='card'>
        <div className='movie-box'>
            <IoShirtOutline />
        </div>
        <div className='movie-info'>
            <h1>{title}</h1>
            <AiFillHeart onClick={() => addToFavorite(title, year)} />
        </div>
        <h2>${year}</h2>
    </div>
  )
}

export default Card