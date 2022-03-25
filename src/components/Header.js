import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AiOutlineLogout} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'
import {signOut} from 'firebase/auth'
import SearchBar from './subComponents/SearchBar'
import {setCurrentDisplayData} from '../redux/action/data'
import {clearCart} from '../redux/action/cart'
import { auth } from '../utils/firebase'
import {updateUserName} from '../redux/action/user'

function Header() {
    const user = useSelector(state=>state.user) ;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleLogout = async () => {
        try {
            const signedout = await signOut(auth);
            // console.log("hey")
            console.log(signedout);
            dispatch(updateUserName(null));
            dispatch(clearCart());
            dispatch(setCurrentDisplayData());
        } catch (error) {
            console.log(error.message);
        }

    }

    

    const handleCart = () => {
        navigate('/cart')
    }
    return (
        <>
            <div className='search'>
                <SearchBar/>
            </div>


            {
                user.name !== null
                    ? <div className='user-info-container'>
                        <div className='cart-tab' onClick={handleCart}>
                            Cart
                        </div>
                        <div className='logout'>
                            <AiOutlineLogout onClick={handleLogout} />
                        </div>
                    </div>
                    : (
                        <div id='login' className='login-container'>
                            <Link to='/login' className='login'>
                                <div>
                                    Login
                                </div>
                            </Link>
                            <div id='ask-login-popup' className='ask-login-popup'>
                                Login first to continue !!
                            </div>
                        </div>

                    )
            }
            
        </>
    )
}

export default Header