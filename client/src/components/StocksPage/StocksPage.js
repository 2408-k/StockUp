import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ListStock from "../ListStock/ListStock";
import StockInfo from "../StockInfo/StockInfo";
import "./StocksPage.css";
const StocksPage = () => {
  let [tarStock, setTarStock] = useState("");
  const targetStock = (tar) => {
    setTarStock(tar);
  };
  if (tarStock.trim().length != 0) {
    return <StockInfo buy={1} targStock={tarStock} />;
  }
  return (
    <div className="Stock">
      <SearchBar targetted={targetStock} />
      <ListStock />
    </div>
  );
};

export default StocksPage;
