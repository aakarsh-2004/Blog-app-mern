import React from 'react';
import './Create.css';

const Create = () => {
  return (
    <div className='Create'>
      <div className="create-content">
        <h1>Create Your Blog</h1>
        <form>
          <div className="title">
            <h3>Title</h3>
            <input type="text" placeholder='Enter Title' />
          </div>
          <div className="description">
            <h3>Description</h3>
            <textarea name="description" id="" cols="30" rows="10" placeholder='Enter Description'></textarea>
          </div>
          <div className="image-link">
            <h3>Link</h3>
            <input type="text" placeholder='Enter image link' />
          </div>
          <button type="submit">Publish</button>
        </form>
      </div>
    </div>
  )
}

export default Create