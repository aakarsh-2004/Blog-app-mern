import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
    const [name, setName] = useState("");
    return (
        <div className='navbar'>
            <main>
                <nav>
                    <ul className='first-section'>
                        <li><a href="/" className='main-logo'>My Blog</a></li>
                        <li><a href="/home" className='hovered'>Home</a></li>
                        <li><a href="/create" className='hovered'>Create Blog</a></li>
                        <li><a href="/register" className='hovered'>Login/Register</a></li>
                    </ul>
                    <ul className='second-section'>
                        <li>{name ? name : ''}</li>
                    </ul>
                </nav>
            </main>
        </div>
    );
};

export default Navbar;