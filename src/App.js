import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import PizzaBlock from './components/PizzaBlock';

import pizzas from './components/assets/pizzas.json';



function App() {


  return (
    <div className="App">
      <div className='App-wrapper'>
        <div className='App-content'>
          <Header />
          <Navigation />
          <div className='content-wrapper'>
            {
              pizzas.map(obj => <PizzaBlock{...obj} />)
            }
            {
              pizzas.map(obj => <PizzaBlock{...obj} />)
            }

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
        </div>
      </div>
    </div >
  );
}

export default App;
