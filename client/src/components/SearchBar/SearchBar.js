import React, { useState } from "react";
import "./SearchBar.css";

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
    <div className="SearchBox">
      <form onSubmit={submitHandler}>
        <div className="label">
          <label>Search for a stock using its symbol</label>
        </div>
        <div className="input">
          {" "}
          <input
            type="text"
            className="form-control "
            value={stock}
            onChange={stockChangeHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-sm button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
