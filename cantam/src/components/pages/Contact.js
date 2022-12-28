import React, {useState} from "react";

export default function Contact() {

  const styles = {
  }
  return (
    <section>
      <h1>Contact us!</h1>
      <p>Find us by:</p>
      <ul>
        <li>
          Email: <a 
            href="mailto:yaso@cantamgroup.com"
          >
            yaso@cantamgroup.com
          </a>
        </li>
        <li>
          Office: <a
            href="tel:+14163353353"
          >
            {"(416)"}-335-3353
          </a>
        </li>
        <li>
          Fax: {"(416)"} 335-7967 
        </li> 
        <li>
        Planning & Building Consultants <br/>
        850 Tapscott Road, Suite 51 <br/>
        Toronto, ON M1X 1N4 
        </li>
      </ul>
    </section>
  )
}