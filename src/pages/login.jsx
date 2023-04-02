import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Home")
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className='reg'>
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'> Chat-X</span>
        <span className='title'>Login</span>
        <form className='forms' onSubmit={handleSubmit}>
            <input className='fillitem' type="email" placeholder='Email'/>
            <input className='fillitem' type="password" placeholder='Password'/>
            <button className='btn' >Sign In</button>
            {err && <span>Something went wrong</span>}
        </form>
        <p>Don't have a account?  {" "}
        <Link to = "/register" style={{textDecoration : "none"}}>
          Register
          </Link>
          </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
