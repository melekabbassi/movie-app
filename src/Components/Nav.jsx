import React from 'react'
import Popcorn from '../Images/popcorn.svg'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
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
                <h3>Home</h3>
            </Link>
        </li>
        
        <li>
            <Link to={"/favorite"} className="navbar-items">
                <h3>Favorite</h3>
            </Link>
        </li>
        
        <li>
            <Link to={"/form"} className="navbar-items">
                <h3>Form</h3>
            </Link>
        </li>
        <input className="search" type="text" placeholder="Search" />

        <li><button className='login-btn'><LoginIcon className="login-icon" /></button></li>

    </ul>
    </div>

  )
}

export default Nav