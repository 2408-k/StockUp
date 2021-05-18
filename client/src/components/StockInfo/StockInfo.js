import React, { useState, useEffect } from "react";
import StockCard from "../StockCard/StockCard";
import axios from "axios";

const StockInfo = (props) => {
  let [card, setCard] = useState({
    symbol: "",
    price: 0,
  });
  let searchedStock = props.targStock;
  let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${searchedStock}&apikey=BWT4ABPX5IJJC42I`;

  // using this as a componentDidMount
  useEffect(() => {
    axios.get(url).then((res) => {
      let temp = res.data;
      setCard((prevState) => {
        return { ...prevState, symbol: temp["Meta Data"]["2. Symbol"] };
      }); //end of setCard

      let times = temp["Time Series (Daily)"];
      let dates = Object.keys(times)[0];
      let priceval = temp["Time Series (Daily)"][dates]["1. open"];
      setCard((prevState) => {
        return { ...prevState, price: Number(priceval) };
      }); // end of setcard
    }); //end of axios
  }, []); //end of useEffect

  return (
    <div style={{marginLeft: "33rem", marginTop: "16rem"}}>
      <StockCard name={card.symbol} symbol={card.price} />
    </div>
  );
};

export default StockInfo;