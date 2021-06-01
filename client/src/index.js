import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
        <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

$(document).ready(function() {
                        $(".menu-icon").on("click", function() {
                            $("nav ul").toggleClass("showing");
                        });
                });

                $(window).on("scroll", function() {
                        if($(window).scrollTop()) {
                            $('nav').addClass('black');
                            $('.logo').addClass('black');
                        }

                        else {
                            $('nav').removeClass('black');
                            $('.logo').removeClass('black');
                        }
                }) 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
