import React from 'react';
import './Blog.css';

const Blog = (props) => {
    return (
        <div className='Component'>
            <img src= {props.link} alt="" />
            <div className="r-side">
                <h1>{props.title}</h1>
                <p>{props.description} <a href="">Read More</a></p>
            </div>
        </div>
    );
};

export default Blog;