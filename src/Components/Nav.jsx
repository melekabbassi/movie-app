import React from 'react'
import Popcorn from '../Images/popcorn.svg'
import { useState } from 'react';
import Login from './Login';
import FormModal from './FormModal';
import { Link, useNavigate } from 'react-router-dom'

export const Nav = () => {
    // const [inputText, setInputText] = useState("");

    // let handleChange = (e) => {
    //     var lowerCase = e.target.value.toLowerCase();
    //     setInputText(lowerCase);
    // }

    // let handleSubmit = (e) => {
    //     e.preventDefault();
    //     navigate("/Search=" + inputText);
    // }

    // const onKeyPress = (e) => {
    //     e.which === 13 ? handleSubmit() : <></>;
    //   };

    // let navigate = useNavigate();
    const [inputText, setinputText] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setinputText(e.target.value);
    };

    const onKeyPress = (e) => {
        e.which === 13 ? handleSearch() : <></>;
    };

    const handleSearch = () => {
        navigate("/Search=" + inputText);
    };
    
    console.log(inputText);
    

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
                <FormModal className="navbar-items" />
        </li>
        <input className="search" type="text" placeholder="Search" onChange={handleChange} onKeyPress={onKeyPress} value={inputText} />
        
        <li><button className='login-btn' ><Login /></button></li>

    </ul>
    </div>

  )
}

export default Nav