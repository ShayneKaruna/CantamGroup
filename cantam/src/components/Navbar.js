import "./pagescss/NavbarStyles.css";
// import logo from "../assets/logo-ma.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  
    const [color, setColor] = useState(false);
    const changeColor = () =>{
      if (window.scrollY >= 100) {
          setColor(true);
      } else {
          setColor(false);
      }
    };
  return (
    <div>

  return (
    <div className={color ? "header header-bg" :"header"}>
      <Link to="/">
        <a href="/">
        <img height="200" width="200" alt="text here" /></a>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );


export default Navbar;
    </div>
  )
}
