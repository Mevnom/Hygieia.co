import React from 'react'
import './header.css'
import HamburgerMenu from './HamburgerMenu.jsx'
import CountrySelector from './CountrySelector.jsx';
import header from "./header.jsx" 

function Header() {

    return (
        <div className='header'>

            <div>
                <h2>
                  <a href="/">  hygieia.co </a>  {""}

                </h2>
            </div>
            <span>
                <HamburgerMenu />
                <button class="button"> Sign up
</button>
                <CountrySelector />
            </span>





















        </div>
    );


}

export default Header;