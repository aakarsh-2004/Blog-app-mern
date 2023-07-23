import React, { useEffect, useContext } from 'react';
import './Navbar.css';
import { UserContext } from '../../Context'

const Navbar = () => {
    const {setUserInfo, userInfo, isLoggedIn, setIsLoggedIn} = useContext(UserContext)
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include'
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
                console.log(userInfo);
            })
        })
    }, [isLoggedIn]);
    const logout = () => {
        fetch('http://localhost:4000/logout', {
            method: 'POST',
            credentials: 'include'
        })
        setUserInfo(null);
        setIsLoggedIn(false);
    }
    const userName = userInfo?.username
    return (
        <div className='navbar'>
            <main>
                <nav>
                    <ul className='first-section'>
                        <li><a href="/" className='main-logo'>My Blog</a></li>
                        <li><a href="/blogs" className='hovered'>Blogs</a></li>
                        <li><a href="/create" className='hovered'>Create Blog</a></li>
                        {userName && <button onClick={logout}>Log out</button> }
                        {!userName && <li><a href="/register" className='hovered'>Login/Register</a></li>
                        }
                    </ul>
                    <ul className='second-section'>
                        <li>{userName && userName }</li>
                    </ul>
                </nav>
            </main>
        </div>
    );
};

export default Navbar;