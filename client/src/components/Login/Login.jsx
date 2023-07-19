import React from 'react';
import './Login.css'
const Login = () => {
  return (
    <div className="Login-main">
      <div className='Login'>
        <h1>Login</h1>
        <form>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="text" id='email' placeholder='Enter email' />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="text" id='password' placeholder='Enter password' />
          </div>
          <button type='submit'>Login</button>
        </form>
        <h3>Don't have an account? <a href="/register">Sign up</a></h3>
      </div>
    </div>
  )
}

export default Login