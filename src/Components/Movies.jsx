import React from 'react'
import Card from './Card'

const Movies = () => {
    //object of movies
    const movies = [
        {title: "The Shawshank Redemption", year: 1994},
        {title: "The Godfather", year: 1972},
        {title: "The Godfather: Part II", year: 1974},
        {title: "The Dark Knight", year: 2008},
        {title: "12 Angry redmen", year: 1957},
        {title: "Schindler's List", year: 1993},
        {title: "Pulp Fiction", year: 1994},                   
    ];

  return (
    <div className='movie-list'>
        {movies.map((movie) => (
            <Card title={movie.title} year={movie.year} />
        ))}
        )
    </div>
  )
}

export default Movies