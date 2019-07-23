import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";
import Navbar from "./Navbar";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      auth: false,
      error: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = async e => {
    e.preventDefault();

    try {
       await axios.post("http://localhost:5000/signup", this.state);
      this.setState(
        {
          auth: true
        },
        () => {
          this.props.history.push("/productList");
        }
      );
    } catch (e) {
      this.setState({
        error: e.response.data.msg
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="signin-container">
          <div className="box">
            <p>Be The First To Know Arrivals, Deals and Updates!</p>
            <h2 className="signup-h2">Sign Up its Free!</h2>
            <form className="signup" onSubmit={this.handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                required
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                required
              />

              <input
                name="firstname"
                placeholder="First Name"
                value={this.state.firstname}
                onChange={this.onChange}
                required
              />

              <input
                name="lastname"
                placeholder="Last Name"
                value={this.state.lastname}
                onChange={this.onChange}
                required
              />
              <p className="error">{this.state.error}</p>
              <button className="signup-btn">Sign Up</button>
            </form>
            <p>
              Already Registered <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(SignUp);
