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
import Home from './pages/Home';
import Products from './pages/Products';
import UIprototype from './pages/UIprototype';

function App() {




  return (
    <div>

     <span>
        <Header />
      </span>

      {/*  <span>
        <RegisteredUser />
      </span>


      <span>
        <UserBody />
      </span> */}
       <HealthFactsSlideshow/>

      <span>
        < Body />
      </span>
      <span>
        < ProductCatalogue />
      </span> 
      <h1>
        Hello World!
      </h1>

    </div >
  );

}


export default App;
