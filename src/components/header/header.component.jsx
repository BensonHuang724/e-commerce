import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg';
const Header = ({currentUser}) => {
    return  <div className='header'>
                <Link className='logo-container ' to='/'>
                     <Logo className='logo '/>
                </Link>
                <div className='options'>
                    <Link className='option d-2' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='option d-2' to='/shop'>
                        CONTACT
                    </Link>
                    {
                        currentUser? 
                        <div className='option d-2' onClick={ ()=>auth.signOut()}>
                            SIGN OUT
                        </div>
                        :
                        <Link className='option d-2' to='/sign-in'>
                            SIGN IN
                        </Link>
                    }
                </div>
            </div>
}
export default Header;