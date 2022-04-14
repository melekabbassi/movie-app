import React from 'react'
import {useState} from 'react'

const Form = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [image, setImage] = useState('');
    
  return (
    <div className="formDiv">
    <form>
        <h1>Add a new Movie</h1>
        <div className="formGroup">
            <label htmlFor="title">Title</label>
            <input 
                onChange={(e)=>setTitle(e.target.value)} 
                type="text" 
                className="form-control" 
                id="title" 
                placeholder="Enter Title" 
            />
        </div>
        <div className="formGroup">
            <label htmlFor="description">Description</label>
            <input
                onChange={(e)=>setDescription(e.target.value)} 
                type="text" 
                className="form-control" 
                id="description" 
                placeholder="Enter Description" 
            />
        </div>
        <div className="formGroup">
            <label htmlFor="genre">Genre</label>
            <input 
                onChange={(e)=>setGenre(e.target.value)}
                type="text" 
                className="form-control" 
                id="genre" 
                placeholder="Enter Genre" 
            />
        </div>
        <div className="formGroup">
            <label htmlFor="image">Image</label>
            <input 
                onChange={(e)=>setImage(e.target.value)}
                type="file" 
                className="formControl" 
                id="image" 
                placeholder="Enter Image" 
            />
        </div>
        <button 
            onClick={(e)=>{
                console.log(props)
                e.preventDefault();
                props.addMovie(title, description, genre, image)
                setTitle('');
                setDescription('');
                setGenre('');
                setImage('');
            }}
            type="submit" 
            className="btn btn-primary"
            >
            Submit
            </button>
    </form>
    </div>
    )
}

export default Form