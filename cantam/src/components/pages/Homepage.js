import React from "react";
import { Link } from "react-router-dom";
import '../pagescss/Homepage.css'
import customeHome from "../images/customhomeOne.jpeg"
import bassiKarim from "../images/BassiKarim.jpeg";
import onTheRun from "../images/OnTheRun.jpeg";

export default function Homepage() {
  return (
    <div className="home">
      <div className="container-one">
        <div className="heading-one">
          <h2>COMMITTED TO QUALITY</h2>
          <h4> Since 2000</h4>
        </div>
        <div className="container-one-body">
          <p>
            SERVICING CANADA Toronto, Kingston, Ottawa, Hamilton, Niagara Falls,
            St. Catharines, Kenora, North Bay, Sault Ste. Marie, Sudbury,
            Thunder Bay, Kitchener, Waterloo, London, Windsor, Ajax, and many
            more...
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={customeHome} alt="custom home" width={350} height={450}></img>
        <img src={bassiKarim} alt="bassi karim" width={350} height={450}></img>
        <img src={onTheRun} alt="on the run" width={350} height={450}></img>
      </div>
      <div className="thing">
        <div className="left">
          <h2> About Us</h2>
          <p className="force-white p-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link to="/about" className="about-more">
            <button className="btn">Learn More</button>
          </Link>
        </div>
        <div className="right">
          <h2> Testimonials </h2>
          <p className="p-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
