import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { updateUserName } from '../redux/action/user'
import '../styles/login.css'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(auth, email, password);

      dispatch(updateUserName(email));
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="login-container">
      <div className="form-wrapper">
        <div className="heading">
          <h2>Sign In</h2>
        </div>
        <form>
          <label>Email Address</label>
          <input type="email" onChange={(e) => { setEmail(e.target.value) }} />
          <label>Password</label>
          <input type="password" onChange={(e) => { setPassword(e.target.value) }} />

          <button type="submit" onClick={login}>Sign In</button>
        </form>
        <div className="content">
          <div>New User?</div>
          <Link to='/signup'>
            <button>Create Your Free account</button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Login