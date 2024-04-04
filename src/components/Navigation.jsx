import React, { useState } from "react";
import './styles/Navigation.css';

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
                    <button onClick={() => onClickCategory(index)} className={activeIndex === index ? 'active' : 'nav-btn'}>{value}</button>
                ))}

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