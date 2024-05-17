import React from "react";
import './styles/Header.css';
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div className="header-wrapper">
            <Link className="logo-wrapper" to="/">
                <img className="logo" src="./images/image 1.png" alt="logo"></img>
                <div className="logo-wrapper-text">
                    <h1 className="logo-title">REACT PIZZA</h1>
                    <p className="logo-text">самая вкусная пицца во вселенной</p>
                </div>
            </Link>
            <div className="basket-wrapper">
                <button className="pries-btn"></button>
                <div className="line-btn"></div>            
                    <Link to="/Basket">
                        <button className="basket-btn"></button>
                    </Link>
            </div>
        </div>
    )
}