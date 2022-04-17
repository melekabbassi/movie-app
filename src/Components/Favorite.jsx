import React from 'react'
import { useContext } from 'react'
import FavoriteContext from '../FavoriteContext'

const Favorite = (props) => {
    const {items} = useContext(FavoriteContext);

  return (
    <div>
        <h1>Favorite</h1>
        <div className='fav-movie-list'>
            {items.map((item) => (
                <div className='fav-movie-box'>
                    <h1>{item.title}</h1>
                    <h2>{item.year}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Favorite