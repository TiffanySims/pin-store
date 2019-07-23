import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../Context";
import CartList from "./CartList";
import Navbar from "../Navbar";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <ProductConsumer>
          {value => {
            const { cart } = value;
            console.log(cart);
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
