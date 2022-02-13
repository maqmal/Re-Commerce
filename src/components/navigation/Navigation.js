import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/FirebaseUtils';

const Navigation = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option' >
                    SHOP
                </Link>
                <Link to='/contact' className='option' >
                    CONTACT
                </Link>
                {
                    currentUser?
                        <div className='option' style={{cursor:'pointer'}}
                        onClick={()=> auth.signOut()}>SIGN OUT</div>
                        :
                        <Link to='/signin'className='option'>SIGN IN</Link>
                }
            </div>
        </div>
    )
}

export default Navigation;