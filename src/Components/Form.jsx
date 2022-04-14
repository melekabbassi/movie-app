import React from 'react'
import Rating from '@mui/material/Rating';

const Form = () => {

  return (
    <div className="form">
        <form>
            <div className="form-group">
                <label title='Title'>Title</label>
                <input type="text" className="form-control" placeholder="Title" />

                <label title='Year'>Year</label>
                <input type="date" className="form-control" placeholder="Year" />

                <label title='Description'>Description</label>
                <input type="text" className="form-control" placeholder="Description" />               
                
                <label title='Genre'>Genre</label>
                <input type="text" className="form-control" placeholder="Genre" />

                <label title='Poster'>Poster</label>
                <input type={'file'} className="form-control-poster" placeholder="Poster" />

                <label title='Rating'>Rating</label><br />
                <Rating className="half-rating" defaultValue={2.5} precision={0.5} />
            </div>
        </form>
        <button type="submit" className="btn btn-primary">Submit</button>
    </div>
    )
}

export default Form