import React, { useContext } from 'react';
import './Create.css';
import axios from 'axios';
import { useState } from 'react';
import { UserContext } from '../../Context';
import Navbar from '../Navbar/Navbar';

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const {userInfo} = useContext(UserContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const blogAdded = {title, description, link};
      const response = await axios.post('https://blog-api.onrender.com/create', blogAdded);
      console.log(response);
      setIsAdded(true);
      setTitle("")
      setDescription("")
      setLink("")
    } catch (error) {
      console.log(`Error while adding the form, try again!`);
    };
  };
  const userName = userInfo?.username
  return (
    <>
      <div className='Create'>
        <div className="create-content">
          <h1>Create Your Blog</h1>
          <form onSubmit={handleSubmit}>
            <div className="title">
              <h3>Title</h3>
              <input type="text" placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)} value={title}/>
            </div>
            <div className="description">
              <h3>Description</h3>
              <textarea name="description" id="" cols="30" rows="10" placeholder='Enter Description' onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
            </div>
            <div className="image-link">
              <h3>Link</h3>
              <input type="text" placeholder='Enter image link' onChange={(e) => setLink(e.target.value)} value={link}/>
            </div>
            {
              userName &&
              <button type="submit">Publish</button> 
            }
            </form>
            { 
              !userName && 
              <div className="publishblog">
                <h3>You are not signed in!</h3>
                <a href="/login">
                  <button>Sign in now</button>
                </a>
              </div>
            }
          
          {isAdded ? 
          <div className="added">
            <h2>Blog Published Successfully!</h2> 
            <button><a href="/blogs">See here</a></button>
          </div>
          : ""}
        </div>
      </div>
    </>
  )
}

export default Create