import React, { useContext, useEffect } from 'react';
import './Update.css';
import axios from 'axios';
import { useState } from 'react';
import { UserContext } from '../../Context';
import { useParams } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const {userInfo} = useContext(UserContext);
  const params = useParams();
  useEffect(() => {
    async function getBlog() {
      const response = await axios.get(`http://localhost:4000/getpost/${params.id}`)
      setTitle(response.data.title);
      setDescription(response.data.description);
      setLink(response.data.link);
    }
    getBlog()
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateData = {title, description, link};
    try {
      const response = await axios.patch(`http://localhost:4000/update/${params.id}`, updateData);
      console.log(response.data);
      setIsAdded(true)
    } catch (error) {
      console.log(`Error calling update api!, ${error}`);
    }
  };
  const userName = userInfo?.username
  return (
    <>
      <div className='Create'>
        <div className="create-content">
          <h1>Update Blog</h1>
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
              <button type="submit">Update</button> 
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
            <h2>Blog Updated Successfully!</h2> 
            <button><a href={`/post/${params.id}`}>See here</a></button>
          </div>
          : ""}
        </div>
      </div>
    </>
  )
}

export default Create