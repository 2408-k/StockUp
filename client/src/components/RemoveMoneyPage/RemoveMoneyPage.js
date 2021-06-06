import "./RemoveMoneyPage.css";
import { useSelector } from "react-redux";
import WalletPage from "../WalletPage/WalletPage";
import LogOut from "../LogOut/LogOut";
const RemoveMoneyPage = () => {
  const isAuth = useSelector((state) => state.auth);
  if (isAuth === 0) {
    return <div>User not logged in!</div>;
  }
  return (
    <div>
      <div class="background-blur">
        <WalletPage />
      </div>
      <div class="row alert-box">
      <LogOut />

        <div class="col-12 message">
          <h4>
            <b>Remove Money from your Wallet</b>
          </h4>
        </div>
        <div class="col-12 input">
          <div class="amount">
            <b>Enter Amount:</b> <input type="amount" class="form-control-sm" />
          </div>

          <div class="key">
            <b>Enter Admin Key:</b>{" "}
            <input type="adminKey" class="form-control-sm" />
          </div>
        </div>

        <div class="col-12 buttons">
          <button type="button" class="btn btn-warning add-button">
            {" "}
            Remove{" "}
          </button>
          <button type="button" class="btn btn-danger cancel-button">
            {" "}
            Cancel{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveMoneyPage;
