import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className=" flex-container">
        <Link className="footer-links" to="/about">
          About
        </Link>
        <Link className="footer-links" to="/faq">
          Faq
        </Link>
        <Link className="footer-links" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
