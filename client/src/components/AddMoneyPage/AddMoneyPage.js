import './AddMoneyPage.css';
import WalletPage from '../WalletPage/WalletPage';

const AddMoneyPage= () => {
    return (
        <div>
            <div class="background-blur">
                <WalletPage />
            </div>
            
            <div class="row alert-box-1">
                <div class="col-12 message">
                    <h4><b>Add Money to your Wallet</b></h4>
                </div>
                <div class="col-12 input">
                    <div class="amount">
                        <b>Enter Amount:</b> <input type="amount" class="form-control-sm" />
                    </div>
                    <div class="key">
                        <b>Enter Admin Key:</b> <input type="adminKey" class="form-control-sm" />
                    </div>
                </div>

                <div class="col-12 buttons">
                        <button type="button" class="btn btn-success add-button"> Add </button>
                        <button type="button" class="btn btn-danger cancel-button"> Cancel </button>
                </div>

            </div>
        </div>
    );
}

export default AddMoneyPage;