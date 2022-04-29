import React from 'react'
import Popcorn from '../Images/popcorn.svg'

import Login from './Login';
import FormModal from './FormModal';
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul >
        
        <li>
            <Link to={"/"}>
                <img src={Popcorn} alt="" className='logo'/>
            </Link>
        </li>

        <li>
            <Link to={"/"} className="navbar-items">
                <h3>Movies</h3>
            </Link>
        </li>
        
        <li>
            <Link to={"/favorite"} className="navbar-items">
                <h3>Favorite</h3>
            </Link>
        </li>
        
        <li>
            <Link to={"/form"} className="navbar-items">
                <FormModal />
            </Link>
        </li>
        <input className="search" type="text" placeholder="Search" />

        <li><button className='login-btn' ><Login /></button></li>

    </ul>
    </div>

  )
}

export default Nav