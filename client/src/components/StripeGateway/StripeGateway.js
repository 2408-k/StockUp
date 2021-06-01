import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./StripeGateway.css";
const StripeGateway = (props) => {
  const product = {
    name: "Add amount to wallet",
    price: props.moneyWallet,
  };
  console.log(product);
  const makePayment = (token) => {
    const body = {
      token, // this consists of publishable key and other stripe related info
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:4000/payment`, {
      //goes to the backend route of stripe
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE ", response);
        const { status } = response;
        if (status === 200) console.log("STATUS ", status);
        props.targetted("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="row alert-box-1">
      <StripeCheckout
        stripeKey="pk_test_51IvydSSIj1aMvURLFs6Tr0VVifdM9yA5wcrOOtOj871VlCu8seEtH3rWVeWeNu07o52p3cMHW3wI4GKUcKea83p900SvgE95zM" //publishable key
        token={makePayment} // this is responsible to fire up the payment
        name="Add money to wallet"
        amount={product.price * 100}
      >
        <button className="btn-large blue">Pay {product.price} $</button>
      </StripeCheckout>
    </div>
  );
};

export default StripeGateway;
