import "./HeroImg.css";

import React from "react";


import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <iframe src="https://giphy.com/embed/3o6ZsT1vikZk2sTNRu" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
      <div className="content">
        <p>HI, I'M SHAYNE</p>
        <h1>Full Stack Web Developer</h1>
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
