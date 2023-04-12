import React from 'react'
import './Login.css'
function Login() {
  return (
    <>
      <div className="contaner">

        <div className="login">
          <h1 className='loginh1' style={{ color: "white" }} >Log In </h1>

          <div className="inputfild">
            Email   <br />
            <input className='email' type="text" placeholder='Email' /> <br /><br />

            Password <br />
            <input className='password' type="Password" placeholder='Password' />

          </div>

        </div>
      </div>
    </>
  )
}

export default Login
