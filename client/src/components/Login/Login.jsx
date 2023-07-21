import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { UserContext } from '../../Context';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUserinfo, setIsLoggedIn} = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addUser = { username, password }
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify(addUser),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      if (!response.ok) {
        console.log('error getting response ');
      };
      if (response.ok) {
        response.json().then((userInfo) => {
          console.log(userInfo);
          setUserinfo(userInfo)
        });
        setIsLoggedIn(true);
        navigate('/');
      };

    } catch (error) {
      console.log(`Error while logging in ${error}`);
    }
  }
  return (
    <div className="Login-main">
      <div className='Login'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="email">
            <label htmlFor="username">Username</label>
            <input type="text" id='username' placeholder='Enter username' onChange={(e) => setUsername(e.target.value)} value={username} />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
          <button type='submit'>Login</button>
        </form>
        <h3>Don't have an account? <a href="/register">Sign up</a></h3>
      </div>
    </div>
  )
}

export default Login