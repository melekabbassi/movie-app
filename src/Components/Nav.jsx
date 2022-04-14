import React from 'react'
import Popcorn from '../Images/popcorn.svg'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={"/"}>
            <Popcorn />
            <span>0</span>
        </Link>
        <Link to={"/"}>
            <h1>Home</h1>
        </Link>
        <Link to={"/Favorite"}>
            <h1>Favorite</h1>
        </Link>
        <Link to={"/Form"}>
            <h1>Form</h1>
        </Link>
    </nav>

  )
}

export default Nav