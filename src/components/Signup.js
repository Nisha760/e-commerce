import React, {useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import {updateUserName} from '../redux/action/user'
import '../styles/signup.css'

function Signup() {
  const [name, setName] = useState('') ;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false) ;
    const navigate = useNavigate();
    const dispatch = useDispatch() ;

    const register = async (e) => {
      e.preventDefault() ;
      try {
          const user = await createUserWithEmailAndPassword(auth, email, password);        
          dispatch(updateUserName(name)) ;
          navigate('/');
          console.log(user)
      } catch (error) {
        console.log(error.message)
          switch(error.message)
          {
            case 'Firebase: Error (auth/email-already-in-use).':
              {
                setError("user already exist")
                break ;
              }
              

            case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
              {
                setError("password must be atleast 6 characters")
                break ;
              }
            
          }
      }
  }

  return (
    <div className="signup-container">
        <div className="form-wrapper">
            <div className="heading">
                <h2>Create Account</h2>
            </div>
            <form>
                {
                  error && 
                  <div style={{color: "red"}}>
                    {error}
                  </div>
                }
                <label>Name</label>
                <input type="text" onChange={(e) => { setName(e.target.value) }}/>
                <label>Email Address</label>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }}/>
                <label>Password</label>
                <input type="password" placeholder="Atleast 6 characters" onChange={(e) => { setPassword(e.target.value) }}/>


                <button type="submit" onClick={register}>Continue</button>
            </form>
            <div className="content">
                <span>Already have an account?</span>
                <span><Link to='/login'>Sign-In</Link></span>
            </div>
        </div>
    </div>
  )
}

export default Signup