import React from "react";
import './styles/Header.css';

export default function Header() {
    return (
        <div className="header-wrapper">
            <div className="logo-wrapper">
                <img className="logo" src="./images/image 1.png" alt="logo"></img>
                <div className="logo-wrapper-text">
                    <h1 className="logo-title">REACT PIZZA</h1>
                    <p className="logo-text">самая вкусная пицца во вселенной</p>
                </div>
            </div>
            <div className="basket-wrapper">
                <button className="pries-btn"></button>
                <div className="line-btn"></div>
                <button className="basket-btn"></button>
            </div>
        </div>
    )
}