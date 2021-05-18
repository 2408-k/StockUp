import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = (props) => {
  let [stock, setStock] = useState("");
  const stockChangeHandler = (event) => {
    setStock(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const SearchStock = stock;
    props.targetted(SearchStock);
    setStock("");
  };
  return (
    <div className="searchBox">
      <form onSubmit={submitHandler}>
          <div className="searchLabel">
          <label>Search for a stock using its symbol</label>
          </div>
       
        <input type="text" value={stock} onChange={stockChangeHandler} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;