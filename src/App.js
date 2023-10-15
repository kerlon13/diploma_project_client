import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';
import Homepage from './pages/HomePage';
import AllProducts from './pages/AllProducts';
import AllSales from './pages/Allsales';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/allProducts' element={<AllProducts />} />
        <Route path='/allSales' element={<AllSales />} />
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;
