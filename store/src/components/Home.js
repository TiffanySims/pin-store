import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="hero">
        <div className="home-container">
          <Link className="shop" to="/productList">
            Shop Now
          </Link>
        </div>
      </div>
    );
  }
}
