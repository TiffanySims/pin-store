import React from "react";
import Navbar from "../Navbar";

export default function Contact() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="contact">
          <h1>Contact Me:</h1>
          <a href="mailto:pintuppins@gmail.com" className="contactme">
            pintuppins@gmail.com
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
