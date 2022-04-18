import React from 'react'
import Popcorn from '../Images/popcorn.svg'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <li>
            <Link to={"/"}>
                <img src={Popcorn} alt="" className='logo'/>
            </Link>
        </li>

        <li>
            <Link to={"/"} className="navbar-items">
                <h3>Home</h3>
            </Link>
        </li>
        
        <li>
            <Link to={"/Favorite"} className="navbar-items">
                <h3>Favorite</h3>
            </Link>
        </li>
        
        <li>
            <Link to={"/Form"} className="navbar-items">
                <h3>Form</h3>
            </Link>
        </li>
        <input className="search" type="text" placeholder="Search" />
    </nav>

  )
}

export default Nav