import React from 'react'
import FavBtn from './FavBtn'

const Card = (props) => {
    
  return (
  <div className='card'>   
      <div className='movie-box'>
            
      </div>
    <FavBtn onClick={(e) => {
        console.log(props)
        e.preventDefault()
        props.addFavorite()
    }}  />
    
  </div>
  )
}

export default Card