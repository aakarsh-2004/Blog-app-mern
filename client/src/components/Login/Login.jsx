import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addUser = { email, password }
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
        const result = await response.json();
        console.log(result);
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
            <label htmlFor="email">Email</label>
            <input type="text" id='email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} value={email} />
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