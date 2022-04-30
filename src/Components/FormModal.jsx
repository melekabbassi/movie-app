import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import { Route } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '2000',
  bgcolor: 'transparent',
  border: 'none',  
};

export default function FormModal(props) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [image, setImage] = useState('');
    const [rating, setRating] = useState('');

  return (
    <div>
      <a href className='form-a' onClick={handleOpen}>Form</a>
      <Modal
        open={open}
        onClose={handleClose}
      >
      
        <Box sx={style}>
        <div className="form">
        <form>
            <div className="form-group">
                <label title='Title'>Title</label>
                <input type="text" className="form-control" placeholder="Title" 
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label title='Year'>Year</label>
                <input type="date" className="form-control" placeholder="Year" 
                    onChange={(e) => setYear(e.target.value)}
                />

                <label title='Description'>Description</label>
                <input type="text" className="form-control" placeholder="Description" 
                    onChange={(e) => setDescription(e.target.value)}
                />               
                
                <label title='Genre'>Genre</label>
                <input type="text" className="form-control" placeholder="Genre" 
                    onChange={(e) => setGenre(e.target.value)}
                />

                <label title='Poster'>Poster</label>
                <input type={'file'} className="form-control-poster" placeholder="Poster" 
                    onChange={(e) => setImage(e.target.files[0])}
                />

                <label title='Rating'>Rating</label><br />
                <Rating className="half-rating" defaultValue={2.5} precision={0.5} 
                    onChange={(e) => setRating(e.target.value)}
                />
            </div>
        </form>


        <button type="submit" className="btn btn-primary" 
            onClick={(e) => {
                e.preventDefault();
                props.addMovie(title, year, description, genre, image, rating)
                setTitle('');
                setYear('');
                setDescription('');
                setGenre('');
                setImage('');
                setRating('');
            }
            }
        >
        Submit
            
        </button>
        
    </div>
        </Box>
      </Modal>
    </div>
  );
}
