import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className="Register-main">
      <div className='Register'>
        <h1>Register</h1>
        <p>Kindly fill this form to register</p>
        <form>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' placeholder='Enter name' />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="text" id='email' placeholder='Enter email' />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="text" id='password' placeholder='Enter password' />
          </div>
          <div className="confirm-password">
            <label htmlFor="name">Repeat Password</label>
            <input type="text" id='name' placeholder='Retype password' />
          </div>
          <button type='submit'>Register</button>
        </form>
        <h3>Already have an account? <a href="/login">Log in</a></h3>
      </div>
    </div>
  )
}

export default Register