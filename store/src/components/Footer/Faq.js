import React from "react";
import Navbar from "../Navbar";

export default function Faq() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <h1 className="faq-h1">F.A.Q</h1>
        <div className="question">
          <p className="bold">What Payment methods do you accept?</p>
          <p>At the moment we only accept PayPal</p>
        </div>

        <div className="question">
          <p className="bold">
            I placed an order, but never received a confirmation email.
          </p>
          <p>
            If you placed an order and did not receive a confirmation, Please
            send us an email
          </p>
        </div>
        <div className="question">
          <p className="bold">How do I change or cancel my order?</p>
          <p>
            We're super quick at processing orders to make sure that you receive
            them as soon as possible. In the case that the order has already
            been shipped, you can return the item within 7 days for a refund
          </p>
        </div>

        <div className="question">
          <p className="bold">How long after I place my order will it ship?</p>
          <p>Orders ship within 72 hours after being placed</p>
        </div>

        <div className="question">
          <p className="bold">What is the return policy?</p>
          <p>
            Items can be returned if contacted within 7 days of receiving item
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
