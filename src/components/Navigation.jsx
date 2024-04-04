import React, { useState } from "react";
import './styles/Navigation.css';
import Sort from "./Sort";

export default function Navigation() {

    const [activeIndex, setActiceIndex] = useState(0);

    const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];


    const onClickCategory = (index) => {
        setActiceIndex(index)
    }

    return (
        <div className="nav-wrapper">
            <div className="nav-btn-wrapper">

                {category.map((value, index) => (
                    <button key={value} onClick={() => onClickCategory(index)} className={activeIndex === index ? 'active' : 'nav-btn'}>{value}</button>
                ))}

            </div>
            <div className="nav-drop-wrapper">
                <Sort />
            </div>
        </div>
    )
}