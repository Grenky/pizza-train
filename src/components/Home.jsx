import React, { useEffect, useState } from 'react';
import PizzaBlock from './PizzaBlock';
import PizzaList from './assets/pizzas.json';
import Skeleton from './Skeleton';
import Navigation from './Navigation';



export default function Home() {

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
      setIsLoading(false);
    }, []);
  
  
    // useEffect(() => {
    //   fetch('https://661e4fe198427bbbef0428a2.mockapi.io/items')
    //     .then((res) => res.json())
    //     .then((arr) => {
    //       setItems(arr);
    //     });
    // }, []);
  

    return(
        <div className='content-wrapper'>
            <Navigation />
            <div className='content-block'>
              {isLoading
                ? [...new Array(3)].map((_, index) => <Skeleton key={index}/>)
                : PizzaList.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)
              }

              {isLoading
                ? [...new Array(3)].map((_, index) => <Skeleton key={index}/>)
                : PizzaList.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)
              }
            </div>




             {/* <PizzaBlock title="Чизбургер-пицца" price="от 395 ₴" src="./images/image2.png" />
            <PizzaBlock title="Сырная" price="от 450 ₴" src="./images/image7.png" />
            <PizzaBlock title="Креветки по-азиатски" price="от 290 ₴" src="./images/image6.png" />
            <PizzaBlock title="Сырный цыпленок" price="от 385 ₴" src="./images/image5.png" />
            <PizzaBlock title="Чизбургер-пицца" price="от 395 ₴" src="./images/image2.png" />
            <PizzaBlock title="Сырная" price="от 450 ₴" src="./images/image7.png" />
            <PizzaBlock title="Креветки по-азиатски" price="от 290 ₴" src="./images/image6.png" />
            <PizzaBlock title="Сырный цыпленок" price="от 385 ₴" src="./images/image5.png" />
            <PizzaBlock title="Сырный цыпленок" price="от 450 ₴" src="./images/image7.png" />
            <PizzaBlock title="Сырный цыпленок" price="от 395 ₴" src="./images/image2.png" /> */}
        </div>
    )
}

