import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./BuyStockCard.css";

const BuyStockCard = (props) => {
  const tokeni = useSelector((state) => state.token);
  const [quant, setQuant] = useState(0);
  const quantChangeHandler = (event) => {
    setQuant(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (tokeni) {
      fetch("http://localhost:4000/buystock", {
        // Adding body or contents to send
        body: JSON.stringify({
          authtoken: tokeni,
          name: "test",
          price: props.price,
          stock: props.name,
          quantity: quant,
        }),

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        // Adding method type
        method: "POST",
      })
        // Converting to JSON
        .then((response) => response.json())

        // Displaying results to console
        .then((json) => {
          console.log(json);
          setQuant(0);
        });
    }
  };
  return (
    <div className="StockCard">
      <h1>{props.name.toUpperCase()}</h1>
      <h1>
        Price: <br></br> ${props.price}
      </h1>
      <div className="Stock-image">
        <form onSubmit={submitHandler}>
          <label for="quantity"> Select Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="0"
            value={quant}
            onChange={quantChangeHandler}
          />
          <button className="btn btn-primary">Buy Stock</button>
        </form>
      </div>
    </div>
  );
};
export default BuyStockCard;
