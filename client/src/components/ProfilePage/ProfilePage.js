import react, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import './ProfilePage.css';
import Navbar2 from '../Navbar2/Navbar2';

function ProfilePage ()
{

    const token = useSelector(state => state.token);

    useEffect(()=>{

        console.log(token);
        if(token){
            fetch("http://localhost:4000/authenticate", {
                // Adding body or contents to send
                body: JSON.stringify({
                    authtoken: 'hellook',
                }),
                
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                // Adding method type
                method: "POST",
                })
                // Converting to JSON
                .then((response) => response.json())

                // Displaying results to console
                .then((json) => {
                    console.log(json);
                });
        }

    },[token]);
    
    var gender="Male";
    var dp_url= gender=="Male" ? "https://www.w3schools.com/howto/img_avatar.png" : "https://www.w3schools.com/howto/img_avatar2.png";
    var firstName="Prateek";
    var lastName="Sharma";
    var emailID="prateeksharma7599@gmailcom";
    var userID="prateek1106";
    var walletBalance=2500;

    return(
        <div>
                <Navbar2/>
                <div class="row">
                    <div class="col-xs-12 col-md-4 box1">
                        
                        <div class="row justify-content-center">
                        <div class="">
                            <img src={dp_url} class="dp-image"/>
                        </div>
                        </div>

                        <div class="row justify-content-center">
                        <div class="">
                            <button type="button" class="btn btn-success view-stocks-button"> View Stocks </button>
                        </div>
                        </div>

                        <div class="row justify-content-center">
                        <div class="">
                            <button type="button" class="btn btn-success my-wallet-button"> My Wallet </button>
                        </div>
                        </div>

                        <div class="row justify-content-center">
                        <div class="">
                            <button type="button" class="btn btn-danger logout-button"> Logout </button>
                        </div>
                        </div>

                    </div>

                    <div class="col-xs-12 col-md-8 box2">

                        <div class="welcome-message">
                            <h1> Hello, {firstName}! </h1>
                            <h4> Welcome to StockUp </h4>
                        </div>

                        <div class="user-details">
                            <b>User ID:</b> {userID}<br/>
                            <b>Full Name:</b> {firstName} {lastName}<br/>
                            <b>Email ID:</b> {emailID}<br/>
                            <b>Gender:</b> {gender}<br/>
                            <b>Wallet Balance:</b> Rs. {walletBalance}<br/>
                        </div>
                    </div>    
                </div>

        </div>
    );
} 

export default ProfilePage;