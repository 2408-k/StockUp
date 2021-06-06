import "./WalletPage.css";
import { useSelector } from "react-redux";
import Navbar2 from "../Navbar2/Navbar2";
import StockDisplayCard from "../StockDisplayCard/StockDisplayCard";
import LogOut from "../LogOut/LogOut";
const UserStocks = [
  {
    initials: "AAPL",
    companyName: "Apple",
    price: "160 USD",
    quantity: "10",
    profit: "15 USD",
    buyDate: "12/02/2021",
    stockExchange: "NASDAQ",
  },
  {
    initials: "MSFT",
    companyName: "Microsoft",
    price: "100 USD",
    quantity: "18",
    profit: "150 USD",
    buyDate: "29/10/2020",
    stockExchange: "NASDAQ",
  },
  {
    initials: "RIL",
    companyName: "Reliance",
    price: "2000 Rs",
    quantity: "20",
    profit: "15000 Rs",
    buyDate: "10/06/2020",
    stockExchange: "NSE",
  },
];

const WalletPage = () => {
  const isAuth = useSelector((state) => state.auth);
  if (isAuth === 0) {
    return <div>User not logged in!</div>;
  }
  return (
    <div class="wrapper">
      <Navbar2 />
      <div class="row">
        <div class="col-xs-12 col-md-4 wallet-box">
          <div class="row justify-content-center">
            <div class="my-wallet-heading col-12">
              <h4>
                <b> My Wallet </b>
              </h4>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="">
              <img
                src="https://icons.iconarchive.com/icons/flat-icons.com/flat/512/Wallet-icon.png"
                class="wallet-pic"
              />
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="balance col-8">
              <b> Wallet Balance:</b> Rs. 25000
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="button-center col-6">
              <button type="button" class="btn btn-success add-money-button">
                {" "}
                Add Money{" "}
              </button>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class=" button-center col-6">
              <button type="button" class="btn btn-warning remove-money-button">
                {" "}
                Remove Money{" "}
              </button>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-md-8 stocks-box">
          <div class="row justify-content-center">
            <div class="my-stocks-heading col-12">
              <h4>
                <b> My Stocks </b>
                <LogOut/>
              </h4>
            </div>
          </div>

          {UserStocks.map((stock) => (
            <StockDisplayCard
              initials={stock.initials}
              companyName={stock.companyName}
              price={stock.price}
              quantity={stock.quantity}
              profit={stock.profit}
              buyDate={stock.buyDate}
              stockExchange={stock.stockExchange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
