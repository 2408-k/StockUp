import "./StockDisplayCard.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";

const StockDisplayCard = (props) => {
    let history = useHistory();
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(props.initials);
    history.push({
        pathname: '/sellstock',
        state: { targStock: props.initials, max : props.quantity }
    });
  };
  return (
    <div class="wrapper">
      <div class="row container.fluid">
        <div class="row col-10 stock-card">
          <div class="col-xs-12 col-lg-2 company-letter-box">
            <div class="company-letter">
              {" "}
              <b> {props.initials} </b>{" "}
            </div>
          </div>

          <div class="company-details col-xs-12 col-sm-6 col-lg-4">
            <div class="">
              <b> Company Name: </b> {props.companyName}
              <br />
              <b> Price: </b> {props.price}
              <br />
              <b> Quantity: </b> {props.quantity}
              <br />
            </div>
          </div>

          <div class="company-details col-xs-12 col-sm-6 col-lg-4">
            <div class="">
              <b> Profit/Loss: </b>{" "}
              <text style={{ color: 450 >= 0 ? "green" : "red" }}>
                <b>{props.profit}</b>
              </text>{" "}
              <br />
              <b> Buy Date: </b> {props.buyDate}
              <br />
              <b> Stock Exchange: </b> {props.stockExchange}
              <br />
            </div>
          </div>

          <div class="col-xs-12 col-lg-2 sell-box">
            <form onSubmit={submitHandler}>
              <button type="submit" class="btn btn-danger sell-button">
                {" "}
                Sell{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDisplayCard;
