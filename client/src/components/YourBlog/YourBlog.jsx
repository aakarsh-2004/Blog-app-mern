import React, { useEffect, useState } from 'react';
import './YourBlog.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const YourBlog = (props) => {
    const params = useParams();
    const [blogDetails, setBlogDetails] = useState({})
    const [isDeleted, setIsDeleted] = useState(false);
    useEffect(() => {
        async function getBlogData() {
            const response = await axios.get(`http://localhost:4000/post/${params.id}`);
            console.log(response);
            setBlogDetails(response.data);
        }
        getBlogData();
    }, [])
    const handleDelete = async () => {
        const response = await axios.delete(`http://localhost:4000/post/delete/${params.id}`)
        setIsDeleted(true)
        console.log(response);
    }
    return (
        <div className='your-blog'>
            <h1>{blogDetails.title}</h1>
            <div className="blogtitle">
                <img src={blogDetails.link} alt="" />
                <div className="buttons">
                    <a href={`/update/${params.id}`}><button>Update</button></a>
                    <button onClick={handleDelete}>Delete</button>
                    {isDeleted && <h3>Blog Deleted Successfully!</h3>}
                </div>
                <p>{blogDetails.description}</p>
            </div>
        </div>
    );
};

export default YourBlog;