import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Blog.css';

const Blog = () => {
    const [blogs, setBlogs] = useState("");
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:4000/blogs');
            const result = response.data;
            setBlogs(result);
        }
        fetchData()
    }, [])
    return (
        <div className='Component'>
            {blogs && blogs.map((blog) => {
                return (
                    <div className="blogs">
                        <img src={blog.link} alt="" />
                        <div className="r-side">
                            <h1>{blog.title}</h1>
                            <p>{blog.description} <a href="">Read More</a></p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Blog;