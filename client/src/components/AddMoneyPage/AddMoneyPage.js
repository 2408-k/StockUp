import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./AddMoneyPage.css";
import WalletPage from "../WalletPage/WalletPage";
import MoneyForm from "../MoneyForm/MoneyForm";
import StripeGateway from "../StripeGateway/StripeGateway";
import LogOut from "../LogOut/LogOut";
const AddMoneyPage = () => {
  const isAuth = useSelector((state) => state.auth);
  const [money, setMoney] = useState("");
  const moneyAdded = (mon) => {
    setMoney(mon);
  };
  if (isAuth === 0) {
    return <div>User not logged in!</div>;
  }
  return (
    <div>
      <div class="background-blur">
        <WalletPage />
      </div>
      <LogOut/>
      {money && <StripeGateway moneyWallet={money} targetted={moneyAdded} />}
      {!money && <MoneyForm targetted={moneyAdded} />}
    </div>
  );
};

export default AddMoneyPage;
