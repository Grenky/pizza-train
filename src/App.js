import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Basket from './components/Basket';
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router';




function App() {




  return (
    <div className="App">
      <div className='App-wrapper'>
        <div className='App-content'>
        <Header />  
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Basket' element={<Basket />} />
            <Route path='*' element={<NotFound />} />
           
          </Routes>
        </div>
      </div>
    </div >
  );
}

export default App;
