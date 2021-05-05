import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './_helpers';
import { App } from './App';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
    </Provider>,
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
                        }

                        else {
                            $('nav').removeClass('black');
                        }
                }) 