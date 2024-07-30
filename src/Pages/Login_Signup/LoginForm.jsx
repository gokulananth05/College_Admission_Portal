import React, { useState } from 'react';
import './Login.css';
import '../../App.css';
import { FaUser,FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const[action,setAction]=useState('');

  const RegisterLink = () =>{
    setAction(' active');
  }

  const Login = (e) =>{
    e.preventDefault();
    alert('LoggedIn Successsfully!')
    navigate('/home')
    setAction('');
  }

  const LoginLink=()=>{
    setAction('');
  }

  const [email, setMailid] = useState('');
  const handleMail = (event) => {
      setMailid(event.target.value)
  }
  const [password, setPassword] = useState('');
  const handlePassword = (event) => {
      setPassword(event.target.value)
  }

  return (
      <div className='logsign d-flex flex-column justify-content-center'>
        {/* <header className='height-25'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                
            </div>
        </header> */}
        <div className={` wrapper${action}`}>
          <div className='form-box login'>
            <form action=''>
              <h1>Login</h1>
              <div className="input-box">
                <input type="text,email"
                value={email}
                onChange={handleMail}
                placeholder='Email' required />
                <FaUser className='icon'/>
              </div>
              <div className="input-box">
                <input type="password" 
                value={password}
                onChange={handlePassword}
                placeholder='Password' required />
                <FaLock className='icon'/>
              </div>

              <div className="remember-forget">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot Password?</a>
              </div>

              <button type="submit" onClick={Login}>Login</button>
              <div className="register-link">
                <p>Dont't have an account? <a href="#"onClick={RegisterLink} >Register</a></p>
              </div>
            </form>
          </div>
        {/* </div> */}

        {/*    */}
        <div className='form-box register'>
          <form action=''>
            <h1>Registration</h1>
            <div className="input-box">
              <input type="text" 
              placeholder='Username' required />
              <FaUser className='icon'/>
            </div>
            <div className="input-box">
              <input type="email" 
              placeholder='Email' required />
              <MdEmail className='icon'/>
            </div>
            <div className="input-box">
              <input type="password" 
              placeholder='Password' required />
              <FaLock className='icon'/>
            </div>
            <div className="input-box">
              <input type="password" 
              placeholder='Confirm Password' required />
              <FaLock className='icon'/>
            </div>

            <div className="remember-forget">
              <label><input type="checkbox" />I agree to the terms & conditions</label>
            </div>

            <button type="submit">Register</button>
            <div className="register-link">
              <p>Already have an account? <a href="#" onClick={LoginLink}>Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default Login;