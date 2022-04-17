import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import { useContext } from 'react'
import FavoriteContext from '../FavoriteContext'
import FavBtn from './FavBtn'


const Card = ({title, year}) => {

    //const {addToFavorite} = useContext(FavoriteContext);

  return (
  <div className='card'>   
      <div className='movie-box'>
            
      </div>
    <FavBtn />
  </div>

  )
}

export default Card