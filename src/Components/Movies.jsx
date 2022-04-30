import React from 'react'
import Card from './Card'

const Movies = () => {
  const movies = [
    {title: "The Shawshank Redemption", year: 1994, id: 1},
    {title: "The Godfather", year: 1972, id: 2},
    {title: "The Godfather: Part II", year: 1974, id: 3},
    {title: "The Dark Knight", year: 2008, id: 4},
    {title: "12 Angry redmen", year: 1957, id: 5},
    {title: "Schindler's List", year: 1993, id: 6},
    {title: "Pulp Fiction", year: 1994, id: 7},
    {title: "The Good, the Bad and the Ugly", year: 1966, id: 8},
    {title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, id: 9},
    {title: "The Lord of the Rings: The Two Towers", year: 2002, id: 10},
  ]
    
  return (
    <div className='movie-list'>
        {movies.map((movie) => (
            <Card title={movie.title} year={movie.year} id={movie.id} />
        ))}
    </div>
  )
}

export default Movies