import React from "react";

import "./StockCard.css";

const StockCard = (props) => {
  return (
    <div className="StockCard">
      <h1>{props.name}</h1>
      <h1>Symbol: {props.symbol}</h1>
      <div className="Stock-image">
        <img src={props.iurl} />
      </div>
    </div>
  );
};
export default StockCard;