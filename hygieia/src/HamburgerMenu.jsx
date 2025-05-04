import { useState } from "react";
import './HamburgerMenu.css';
import UIprototype from "./pages/UIprototype.jsx"
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  // State to manage menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      {/* Hamburger Icon */}
      <i
        className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}
        onClick={toggleMenu}
        style={{ cursor: "pointer", fontSize: "18px" }}
      ></i>

      {/* Menu Content */}
      {isOpen && (
        <div className="menu">
          <ul>
            <li>Product Catalogue</li>
            <li>Contact</li>
            <li>
               Subscription
              </li>
            <li>
              <a href="/UIprototype">UI Prototype</a>
              </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;