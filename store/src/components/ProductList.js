import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import Navbar from "./Navbar";
import { storeProducts } from "../data";
import { ProductConsumer } from "../Context";

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <div>
        <React.Fragment>
          <Navbar />
          <div className="py-5">
            <div className="container">
              <Title name="Get Pin't" title="Up" />
              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
