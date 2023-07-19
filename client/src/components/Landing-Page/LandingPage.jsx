import React from 'react';
import Navbar from '../Navbar/Navbar';
import Blog from '../Blog/Blog';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className='landingpage'>
            <div className="main-content">
                <div className="text-content-main">
                    <h1>Sign up now to this amazing blog service!</h1>
                    <p>We give 3 months free trial and money back guarantee. Sign up now!</p>
                    <button><a href="/register" className='signup-btn'>Sign Up</a></button>
                </div>
                <img src="https://mehulk05.github.io/Blogapp-using-MERN/static/media/asset-1.171cd5d9.png" alt="" />
            </div>
            <div className="secondary-content">
                <h1>Some of the recent blogs.</h1>
                <Blog 
                link = "https://upload.wikimedia.org/wikipedia/commons/8/81/Artificial_Intelligence_%26_AI_%26_Machine_Learning_-_30212411048.jpg"
                title = 'Is Chat-GPT the end of everything?'
                description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus esse recusandae eius! Incidunt optio voluptatum officiis repellendus repudiandae pariatur. Animi fugiat sapiente corrupti porro dolorem. Minima vero natus, animi dolorem exercitationem recusandae pariatur perferendis'
                />
                <Blog 
                link = "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80"
                title = 'How to travel the world for cheap?'
                description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus esse recusandae eius! Incidunt optio voluptatum officiis repellendus repudiandae pariatur. Animi fugiat sapiente corrupti porro dolorem. '
                />
            </div>
        </div>
    );
};

export default LandingPage;