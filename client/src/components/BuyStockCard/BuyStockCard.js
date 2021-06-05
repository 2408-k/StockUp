import React from "react";

import "./BuyStockCard.css";

const BuyStockCard = (props) => {
  return (
    <div className="StockCard">
      <h1>{props.name.toUpperCase()}</h1>
      <h1>
        Price: <br></br> ${props.price}
      </h1>
      <div className="Stock-image">
        <form>
          <label for="quantity"> Select Quantity</label>
          <input type="number" id="quantity" name="quantity" min="0" />
          <button className="btn btn-primary">Buy Stock</button>
        </form>
      </div>
    </div>
  );
};
export default BuyStockCard;
