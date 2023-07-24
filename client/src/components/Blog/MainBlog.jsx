import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Blog.css';
import YourBlog from '../YourBlog/YourBlog';

const MainBlog = () => {
    const [blogs, setBlogs] = useState("");
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://blog-api.onrender.com/blogs');
            const result = response.data;
            setBlogs(result.reverse());
        }
        fetchData()
    }, [])
    return (
        <>
            
            <div className='Component'>
                {blogs && blogs.map((blog) => {
                    return (
                        <div className="blogs" key={blog._id}>
                            <a href={`/post/${blog._id}`}><img src={blog.link} alt="" /></a>
                            <div className="r-side">
                                <a href={`/post/${blog._id}`}><h1>{blog.title}</h1></a>
                                <p>{blog.description.slice(0,200)} <a href={`/post/${blog._id}`}>Read More</a></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default MainBlog;