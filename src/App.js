import React, { useEffect} from 'react';
import { Route, Routes} from 'react-router-dom';
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
import Categories from './pages/Categories';
import SingleCategory from './pages/SingleCategory';
import { useRef } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;







