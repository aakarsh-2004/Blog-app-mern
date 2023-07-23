import React from 'react';
import './YourBlog.css';

const YourBlog = (props) => {
    const handleDelete = () => {
        console.log('any');
    }
    return (
        <div className='your-blog'>
            <h1>{props.title}</h1>
            <div className="blogtitle">
                <img src={props.img} alt="" />
                <div className="buttons">
                    <a href="/update"><button>Update</button></a>
                    <button onClick={handleDelete}>Delete</button>
                </div>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default YourBlog;