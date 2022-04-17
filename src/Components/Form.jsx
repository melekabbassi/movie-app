import {useState} from 'react'
import Rating from '@mui/material/Rating';

const Form = (props) => {
    
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [image, setImage] = useState('');
    const [rating, setRating] = useState('');

  return (
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
    )
}

export default Form