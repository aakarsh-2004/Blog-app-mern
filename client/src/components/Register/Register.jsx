import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import Navbar from '../Navbar/Navbar';


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matched, setMatched] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const userAdded = {username, email, password};
      axios.post('https://blog-api.onrender.com/register', userAdded)
        .then((response) => {
          console.log(response);
          navigate('/blogs');
        })
        .catch((err) => {
          console.log(err);
        });
      setMatched(true);
    } else {
      console.log('Passwords do not match');
    }
  }
  return (
    <>
    
      <div className="Register-main">
        <div className='Register'>
          <h1>Register</h1>
          <p>Kindly fill this form to register</p>
          <form onSubmit={handleSubmit}>
            <div className="name">
              <label htmlFor="name">Username</label>
              <input type="text" id='name' placeholder='Enter username' onChange={(e) => setUsername(e.target.value)} value={username}/>
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="text" id='email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" id='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>
            <div className="confirm-password">
              <label htmlFor="confirm-password">Repeat Password</label>
              <input type="password" id='confirm-password' placeholder='Retype password' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
            </div>
            <button type='submit'>Register</button>
          </form>
          <h3>Already have an account? <a href="/login">Log in</a></h3>
        </div>
      </div>
    </>
  )
}

export default Register