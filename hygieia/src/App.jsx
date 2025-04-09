import './App.css'
import { useState, useEffect } from 'react';
import Header from './header.jsx'
import RegisteredUser from './UserHeader.jsx';
import UserBody from './UserBody.jsx';
import Select from "react-select";
import Body from './body-uno.jsx'
import ProductCatalogue from './ProductCatalogue.jsx';


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
