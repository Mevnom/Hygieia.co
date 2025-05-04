import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function Signup() {
    return (
        <div className="signup-container">
            <form className="signup-form">
                <h2>Create Account</h2>

                <div className="input-group">
                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                    <input type="text" placeholder="Full Name" required />
                </div>

                <div className="input-group">
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                    <input type="email" placeholder="Email Address" required />
                </div>

                <div className="input-group">
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <input type="password" placeholder="Password" required />
                </div>

                <div className="input-group">
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <input type="password" placeholder="Confirm Password" required />
                </div>

                <button type="submit">Sign Up</button>

                <div className="signup-options">
                    Forgot Password?
                    <span>
                        Already have an account? Login
                    </span>
                    <div className="contact-link">
                        Need help? Contact Us
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signup;
