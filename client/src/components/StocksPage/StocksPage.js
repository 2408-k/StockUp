import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import ListStock from "../ListStock/ListStock";
import StockInfo from "../StockInfo/StockInfo";
import LogOut from "../LogOut/LogOut";
import "./StocksPage.css";
const StocksPage = () => {
  const isAuth = useSelector((state) => state.auth);
  let [tarStock, setTarStock] = useState("");
  const targetStock = (tar) => {
    setTarStock(tar);
  };
  if (isAuth === 0) {
    return <div>User not logged in!</div>;
  }
  if (tarStock.trim().length != 0) {
    return <StockInfo buy={1} targStock={tarStock} />;
  }
  return (
    <div className="Stock">
      <SearchBar targetted={targetStock} />
      <LogOut/>
      <ListStock />
    </div>
  );
};

export default StocksPage;
