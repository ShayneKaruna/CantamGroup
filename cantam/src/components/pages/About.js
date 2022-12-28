import "../pagescss/About.css";
import company from "../images/company.jpeg"

import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="company">
        <h1>About</h1>
        <img src={company} alt="company" width={1200}></img>
        <p>
          We are a team of professionals who provide planning, architecture,
          engineering and project management services in land development and
          building services across Canada. Our well known projects include
          hotels such as Holiday Inn, Best Western, 4 Points, and Marriott
          Suites. We’ve also done Gas Stations with Tim Horton’s, McDonald’s,
          Esso, Mr. Lube, Ultramar, and many more. We are specialized in
          commercial and industrial developments as well as residential
          projects. Our capacity ranges from commercial/Industrial plazas, both
          land development and the structures, single commercial units
          residential subdivisions, to renovations, additions, and single custom
          built homes. At Cantam Group we provide complete services starting
          from preliminary design, planning including site plan
          approval/rezoning approval, engineering drawings, site servicing,
          grading and landscape plans, continued with the building permit
          application. We’ll even provide design build solutions when requested
          by clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="specialize">
        <h1>We Specialize In:</h1>
        <div className="thing">
          <div className="left">
            Architectural Solutions Structural/Electrical/Mechanical Engineering
            Committee of Adjustments Construction and Complete Project
            Management Building Permits Custom Home Designs Lot Grading and
            Survey plans Repair car garages New Commercial and Industrial Plaza
            Designs Site Plan Approval Rezoning Applications
          </div>
          <div className="right">
            RESIDENTIAL Custom home designs 2nd floor additions Survey Plan /
            Lot Grading Certification COMMERCIAL / OFFICE / INDUSTRIAL Complete
            new plazas Additions & restaurants renovations New occupancy Repair
            car garage designs
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
