import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import Blog from '../Blog/Blog';
import './LandingPage.css';
import { UserContext } from '../../Context';

const LandingPage = () => {
    const {userInfo} = useContext(UserContext);
    const userName = userInfo?.username;
    return (
        <>
            <div className='landingpage'>
                <div className="main-content">
                    <div className="text-content-main">
                        {
                            userName ? 
                            <h1>You are successfully signed in!!</h1>
                            : <h1>Sign up now to this amazing blog service!</h1>
                        }
                        {
                            userName ?
                            <p>Your 3 months free trial is now activated, enjoy!!</p>
                            : <p>We give 3 months free trial and money back guarantee. Sign up now!</p>
                        }
                        {
                            userName ?
                            <div className="signedincontent">
                                <h3>Create your blogs now!!</h3>
                                <a href="/create"><button>Create</button></a>
                            </div>
                            : <button><a href="/register" className='signup-btn'>Sign Up</a></button>
                        }
                    </div>
                    <img src="https://mehulk05.github.io/Blogapp-using-MERN/static/media/asset-1.171cd5d9.png" alt="" />
                </div>
                <div className="secondary-content">
                    <h1>Some of the recent blogs.</h1>
                    <Blog count = '2'/>
                </div>
                <div className="credits">
                    <h1>Created by Aakarsh</h1>
                    <a href='https://github.com/aakarsh-2004/Blog-app-mern' target='_blank'>Source code on github</a>
                </div>
                <footer>
                    © All Copyrights Reserved by Aakarsh Beohar
                </footer>
            </div>
        </>
    );
};

export default LandingPage;