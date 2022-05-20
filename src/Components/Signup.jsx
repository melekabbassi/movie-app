import React from 'react'
import {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '2000',
  bgcolor: 'transparent',
  border: 'none',  
};

const Signup = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const register = () => {
      const {name, email, password} = user;
      if (name && email && password) {
        axios.post("http://localhost:3000/users/login", user).then(res => console.log(res))
      } 
      else {
          console.log("invalid");
        }
      }

    return (
        <div>
          <a href className='signup-a' onClick={handleOpen}>Sign Up</a>
          <Modal
            open={open}
            onClose={handleClose}
          >
          
            <Box sx={style}>
            <div className="form">
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" id="username" value={user.name} onChange={handleChange} placeholder="Username" />
    
                    <label>Password</label>
                    <input type="password" className="form-control" id="password" value={user.password} onChange={handleChange} placeholder="Password" />

                    <label>Confirm Password</label>
                    <input type="password" className="form-control" id="password" value={user.password} onChange={handleChange} placeholder="Confirm Password" />

                    <label>Email</label>
                    <input type="email" className="form-control" id="email" value={user.email} onChange={handleChange} placeholder="Email" />
                    <br />
                    <label>
                        <input type="checkbox" />
                        <span>I agree to the Terms and Conditions</span>
                    </label>

                    <div className="login-btns">
                    <button type="submit" className="btn btn-primary" onClick={register} >Sign Up</button>
                    </div>
    
                </div>
            </form>     
        </div>
            </Box>
          </Modal>
        </div>
      );
}

export default Signup