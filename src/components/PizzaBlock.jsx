
import React, { useState } from 'react';
import './styles/PizzaBlock.css';


export default function PizzaBlock({ name, src, sizes, types, price }) {
    const typesName = ['тонкое', 'традиционное']

    const [pizzaCount, setPizzaCount] = useState(0);
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const pizzaCounting = () => {
        setPizzaCount(pizzaCount + 1);
    }


    return (
        <div className="pizza-wrapper">
            <img className='pizza' src={src} alt={name}></img>
            <p className='pizza-title'>{name}</p>
            <div className='pizza-block-selector'>
                <ul className='first-selector'>
                    {
                        types.map((typeId) => (
                            <li
                                key={typeId}
                                onClick={() => setActiveType(typeId)}
                                className={activeType === typeId ? 'new-active' : ''}>
                                {typesName[typeId]}
                            </li>))
                    }
                </ul>
                <ul className='size-selector'>
                    {
                        sizes.map((size, i) => (
                            <li key={i} onClick={() => setActiveSize(i)} className={activeSize === i ? 'new-active' : ''}>{size} см.</li>))
                    }
                </ul>
            </div>
            <div className='price-block'>
                <div className='pizza-price'>от {price} ₴</div>
                <button onClick={pizzaCounting} className="pizza-btn">+ Add {pizzaCount}</button>
            </div>
        </div>
    )
}