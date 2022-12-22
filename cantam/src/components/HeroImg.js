import "./HeroImg.css";

import React from "react";

import hero from "../components/images/background.gif" 
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
      <img src={hero} width="100%" height="100%" class="giphy-embed" allowFullScreen></img> 
      </div>
      <div className="content">
        <p>Since 2000</p>
        <h1>COMMITTED TO QUALITY</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
