import './App.css'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './header.jsx';
import RegisteredUser from './UserHeader.jsx';
import UserBody from './UserBody.jsx';
import Select from "react-select";
import Body from './body-uno.jsx'
import ProductCatalogue from './ProductCatalogue';
import HealthFactsSlideshow from './Healthfacts.jsx';
import Signup from './Signup.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
/* import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import UIprototype from './pages/UIprototype.jsx';
import Contact from './pages/Contact.jsx'; */

function App() {




  return (
    <div className='container-uno'>


{/*       <Router>
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/Products.jsx" element={<Products />} />
          <Route path="/UIprototype.jsx" element={<UIprototype />} />
          <Route path="/Contact.jsx" element={<Contact />} />
        </Routes>
      </Router> */}



      <span>
        <Header />
      </span>

      <HealthFactsSlideshow />

      <span>
        < Body />
      </span>
      <span>
        < ProductCatalogue />
      </span>
      <h1>
        Hello World!
      </h1>

       <span>
        <RegisteredUser />
      </span>


      <span>
        <UserBody />
      </span> 

      <span>
        <Signup />
      </span>

      <span>
        <Contact />
      </span>

      <span>
        <Login />
      </span>

    </div >
  );

}


export default App;
