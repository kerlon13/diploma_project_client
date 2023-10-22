import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';
import Homepage from './pages/HomePage';
import AllProducts from './pages/AllProducts';
import AllSales from './pages/Allsales';
import Cart from './pages/Cart';
import { useDispatch} from 'react-redux';
import { getCategories } from './core/redux/store/slices/categoriesSlice';
import { getProducts } from './core/redux/store/slices/productsSlice';
import Footer from './components/Footer';

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/allProducts' element={<AllProducts />} />
        <Route path='/allSales' element={<AllSales />} />
        <Route path='/cart' element={<Cart />}/>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
