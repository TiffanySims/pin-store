import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signin", this.state);
      if (res.data.token) {
        this.props.history.push("/productList");
      }
    } catch (e) {
      this.setState({
        error: "Email or Password is invalid"
      });
    }
  };

  render() {
    return (
      <div className="signin-back">
        <Navbar />
        <div className="signin-container">
          <h1>Pin't Up</h1>
          <div className="signin-form">
            <h3>Sign In</h3>
            <p> Sign In to receive your discount! </p>
            <form className="" onSubmit={this.handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <p className="error">{this.state.error}</p>
              <button className="signin-btn">Sign In</button>
            </form>
            <p>
              Interested in the perks? <Link to="/signup">Sign up Now</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
