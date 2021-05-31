import React, { useState } from "react";
import "./MoneyForm.css";
const MoneyForm = (props) => {
  let [money, setMoney] = useState("");
  const moneyChangeHandler = (event) => {
    setMoney(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const Money = money;
    console.log(Money);
    props.targetted(Money);
    setMoney("");
  };

  return (
    <div className="row alert-box-1">
      <form onSubmit={submitHandler}>
        <div className="col-12 input">
          <label>
            <h4>
              <b>Add amount that you want to add to your wallet</b>
            </h4>
          </label>
        </div>
        <div className="amount">
    
          <input type="text" value={money} onChange={moneyChangeHandler} />
        </div>

        <button type="submit" className="btn btn-success add-button  buttons">Submit</button>

      </form>
    </div>
  );
};

export default MoneyForm;
