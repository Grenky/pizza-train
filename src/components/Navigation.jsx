import React from "react";
import './styles/Navigation.css';

export default function Navigation() {
    return (
        <div className="nav-wrapper">
            <div className="nav-btn-wrapper">
                <button className="nav-btn">Все</button>
                <button className="nav-btn">Мясные</button>
                <button className="nav-btn">Вегетарианская</button>
                <button className="nav-btn">Гриль</button>
                <button className="nav-btn">Острые</button>
                <button className="nav-btn">Закрытые</button>
            </div>
            <div className="nav-drop-wrapper">
                <div>
                    <a></a>
                    <a></a>
                    <a></a>
                </div>
            </div>
        </div>
    )
}