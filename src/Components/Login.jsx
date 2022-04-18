import React from 'react'
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '2000',
  bgcolor: 'transparent',
  border: 'none',  
};

const Login = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            handleClose();
        } else {
            alert('Username or Password is incorrect');
        }
    }




  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
      
        <Box sx={style}>
        <div className="form">
        <form>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" id="username" placeholder="Username" />

                <label>Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
                
                <div className="login-btns">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>

                <button type="submit" className="btn btn-primary">Sign Up</button>
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