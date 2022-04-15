import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import { useContext } from 'react'
import FavoriteContext from '../FavoriteContext'
import Star from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Card = ({title, year}) => {

    //const {addToFavorite} = useContext(FavoriteContext);

  return (
  <div>   
    <div className='card'>
        <div className='movie-box'>
            
        </div>
        <div className='movie-info'>
            
            
            
        </div>
        <h2>${year}</h2>    
    </div>
    <div className='caption'>
      <StarBorderIcon className='Star' />
      <br />
      <Star className='Fill-Star' />
    </div> 
  </div>

  )
}

export default Card