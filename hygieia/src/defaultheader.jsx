import React from 'react';
import './DefaultHeader.css';
import HamburgerMenu from './HamburgerMenu.jsx';
import CountrySelector from './CountrySelector.jsx';
import { Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function DefaultHeader() {

    const navigate = useNavigate();

    return (
        <div className='defaultheader'>

            <div>
                <h2>
                    <Link to={"/"}>hygieia.co</Link>
                </h2>

            </div>
            <span>
                 <HamburgerMenu />
            </span>





















        </div>
    );


}

export default DefaultHeader;