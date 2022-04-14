import React from 'react'
import Popcorn from '../Images/popcorn.svg'
import { Link } from 'react-router-dom'
// import FavoriteContext from '../FavoriteContext'
// import { useContext } from 'react'

export const Nav = () => {
    // const {items} = useContext(FavoriteContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={"/"}>
            <img src={Popcorn} alt="" className='logo'/>
            {/* <span>{items.length}</span> */}
        </Link>
        <Link to={"/"} className="navbar-items">
            <h1>Home</h1>
        </Link>
        <Link to={"/Favorite"} className="navbar-items">
            <h1>Favorite</h1>
        </Link>
        <Link to={"/Form"} className="navbar-items">
            <h1>Form</h1>
        </Link>

        <input className="search" type="text" placeholder="Search" />
    </nav>

  )
}

export default Nav