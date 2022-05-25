import React from 'react'
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Signup from './Signup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '2000',
  bgcolor: 'transparent',
  border: 'none',  
};

const Login = ({setLoginUser}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const history = useNavigate();
    const [user, setUser] = useState({
        name: "",
        password: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const login = () => {
      axios.post("http://localhost:3000/users/login", user).then(res => { alert(res.data.message);
        setLoginUser(res.data.user);
        history.push("/");
      }).catch(err => {
        alert(err.response.data.message);
      });
    }

  return (
    <div>
      <Button onClick={handleOpen}><LoginIcon className="login-icon" /></Button>
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
                
                <div className="login-btns">
                <button type="submit" className="btn btn-primary" onClick={login}>Login</button>

                {/* <button type="submit" className="btn btn-primary"><Signup /></button> */}
                <li className = "btn btn-primary"> <Signup /></li>
                </div>

            </div>
        </form>     
    </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Login