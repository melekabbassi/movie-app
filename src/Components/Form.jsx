import React from 'react'

const Form = () => {

  return (
    <div className="form">
        <form>
            <div className="form-group">
                <label title='Title'>Title</label>
                <input type="text" className="form-control" placeholder="Title" />

                <label title='Year'>Year</label>
                <input type="text" className="form-control" placeholder="Year" />

                <label title='Description'>Description</label>
                <input type="text" className="form-control" placeholder="Description" />

                <label title='Poster'>Poster</label>
                <input type={'file'} className="form-control" placeholder="Poster" />

                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
    )
}

export default Form