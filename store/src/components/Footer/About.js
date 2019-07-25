import React from "react";
import Navbar from "../Navbar";

export default function About() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container about-container">
        <div>
          <img src="img/owner.jpg" className="owner-pic" alt="owner" />
          <p>
            <strong>qvware</strong>
          </p>
        </div>
        <div>
          <p>
            Being a graphic designer, a fashion enthusiast, and pin/patch
            collector myself; I found a void in the pin community that I felt my
            designs could fill. Get Pin't Up and follow us on your social media
            @pint.up!
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
