import React, {useState} from 'react';
import "./AddMoneyPage.css";
import WalletPage from "../WalletPage/WalletPage";
import MoneyForm from "../MoneyForm/MoneyForm";
import StripeGateway from "../StripeGateway/StripeGateway";
const AddMoneyPage = () => {
    const [money, setMoney] = useState("");
    const moneyAdded = (mon) => {
      setMoney(mon);
    };
  
  return (
    <div>
      <div class="background-blur">
        <WalletPage />
      </div>
      {money && <StripeGateway moneyWallet={money} targetted={moneyAdded} />}
        {!money && <MoneyForm targetted={moneyAdded} />}
    </div>
  );
};

export default AddMoneyPage;
