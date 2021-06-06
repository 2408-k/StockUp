import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BuyStockCard from "../BuyStockCard/BuyStockCard";
import SellStockCard from "../SellStockCard/SellStockCard";
import axios from "axios";

const StockInfo = (props) => {
  let [card, setCard] = useState({
    symbol: "",
    price: 0,
  });
  console.log(props);
  let searchedStock = props.location.state.targStock;
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
  const isAuth = useSelector((state) => state.auth);
  if (isAuth === 0) {
    return <div>User not logged in!</div>;
  }
  return (
    <div style={{ marginLeft: "33rem", marginTop: "16rem" }}>
      {props.buy && <BuyStockCard name={card.symbol} price={card.price} />}
      {!props.buy && (
        <SellStockCard
          name={card.symbol}
          price={card.price}
          max={props.location.state.max}
        />
      )}
    </div>
  );
};

export default StockInfo;
