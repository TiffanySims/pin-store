import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details";
import Default from "./components/Default";
import Modal from "./components/Modal";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import About from "./components/Footer/About";
import Faq from "./components/Footer/Faq";
import Contact from "./components/Footer/Contact";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/about' component={About} />
          <Route path='/faq' component={Faq} />
          <Route path='/contact' component={Contact} />

          <Route component={Default} />
        </Switch>
        <Footer />
        <Modal />
      </React.Fragment>
    );
  }
}
export default App;
