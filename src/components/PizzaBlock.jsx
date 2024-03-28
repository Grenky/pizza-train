import React from 'react';
import './styles/PizzaBlock.css';

export default function PizzaBlock({ title, price, src }) {

    const [pizzaCount, setPizzaCount] = React.useState(0)


    const pizzaCounting = () => {
        setPizzaCount(pizzaCount + 1);
    }

    return (
        <div className="pizza-wrapper">
            <img className='pizza' src={src} alt={title}></img>
            <p className='pizza-title'>{title}</p>
            <div></div>
            <div className='price-block'>
                <div className='pizza-price'>{price}</div>
                <button onClick={pizzaCounting} className="pizza-btn">+ Add {pizzaCount}</button>
            </div>
        </div>
    )
}