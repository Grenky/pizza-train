import React from "react"
import './styles/BasketEmpty.scss';

export default function BasketEmpty() {
    return(
        <div className="baskempty-wrapper">
            <h1>Корзина пустая 😕</h1>
            <div>Вероятней всего, вы не заказывали ещё пиццу.<br/>
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </div>
            <img src="./images/vector.png" alt="basket-img"></img>
            <button>Корзина пустая</button>
        </div>
    )
}