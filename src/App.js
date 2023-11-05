import React, { useEffect, useState} from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';
import Homepage from './pages/HomePage';
import AllProducts from './pages/AllProducts';
import AllSales from './pages/Allsales';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Categories from './pages/Categories';
import SingleCategory from './pages/SingleCategory';
import { useRef } from 'react';
import SingleProduct from './pages/SingleProduct';
import NotAPage from './pages/NotAPage';

function App() {
  const location = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [location]);

  const catalogRef = useRef(null);
  const saleRef = useRef(null);

  return (
    <div className="App">
      <NavMenu catalogRef={catalogRef} />
      <Routes>
        <Route path='/' element={<Homepage catalogRef={catalogRef} saleRef={saleRef}/>}/>
        <Route path='/allProducts' element={<AllProducts />} />
        <Route path='/allSales' element={<AllSales />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/categories' element={<Categories />} />
        <Route path='/:category_id' element={<SingleCategory />} />
        <Route path='/products/:product_id' element={<SingleProduct />} />
        <Route path='*' element={<NotAPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;







