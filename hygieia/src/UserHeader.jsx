import React from 'react'
import './header.css';
import HamburgerMenu from './HamburgerMenu.jsx';

let name = 'draco'

function RegisteredUser() {

    return (
        <div className='header-deux'>

            <div className='username-deux'>
                <h3> Wagwan {/* &nbsp; */} <span>{name}</span> <i class="fa-solid fa-bolt"></i></h3>
            </div>
            <span>
                <i class="fa-solid fa-user"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-gear"></i>
            </span>





















        </div>
    );


}

export default RegisteredUser;