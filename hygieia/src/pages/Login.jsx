import React from 'react';
import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Log In</h2>

        <div className="input-group">
          <FontAwesomeIcon icon={faUser} className="input-icon" />
          <input type="text" placeholder="User ID" required />
        </div>

        <div className="input-group">
          <FontAwesomeIcon icon={faLock} className="input-icon" />
          <input type="password" placeholder="Password" required />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
