import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
import ProductsContainer from '../../components/ProductsContainer';
import InputPriceSelection from '../../components/InputPriceSelection';
import { getProducts, setMinPrice, setMaxPrice } from '../../core/redux/store/slices/productsSlice';
import { setSortingMethod } from '../../core/redux/store/slices/sortingSlice';
import { sortProducts } from '../../utils';
import { useEffect } from 'react';
import { useState } from 'react';

function AllSales() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMinPrice(''));
        dispatch(setMaxPrice(''));
        dispatch(setSortingMethod('default'))
    }, []);

    const { productsData, status } = useSelector((state) => state.products);
    const sortOption = useSelector((state) => state.sorting);
    const minPrice = useSelector((state) => state.products.minPrice);
    const maxPrice = useSelector((state) => state.products.maxPrice);

    useEffect(() => {
        dispatch(getProducts());
    }, [minPrice, maxPrice, sortOption]);

    const discountProducts = productsData.filter(
        (product) => product.discont_price !== null
    );
    const [sortedData, setSortedData] = useState(discountProducts);

    const handleSortChange = (newSortOption) => {
        dispatch(setSortingMethod(newSortOption.target.value));
    };

    const handleMinPrice = (event) => {
        dispatch(setMinPrice(event.target.value));
    };
      
    const handleMaxPrice = (event) => {
        dispatch(setMaxPrice(event.target.value));
    };

    useEffect(() => {
        const filteredProducts = discountProducts.filter((product) => {
          const price = parseFloat(product.price);
      
          if (minPrice && maxPrice) {
            return price >= minPrice && price <= maxPrice;
          } else if (minPrice) {
            return price >= minPrice;
          } else if (maxPrice) {
            return price <= maxPrice;
          }
      
          return true;
        });
      
        let sortedProducts = sortProducts(filteredProducts, sortOption);
      
        setSortedData(sortedProducts);
      }, [sortOption, productsData, minPrice, maxPrice]);

    return (
        <div className={styles.AllSales_wrapper}>
            <h3 className={styles.sales_title}>Products with sale</h3>
            <InputPriceSelection 
                sortOption={sortOption} 
                handleSortChange={handleSortChange}
                minPrice={minPrice}
                maxPrice={maxPrice}
                handleMinPrice={handleMinPrice}
                handleMaxPrice={handleMaxPrice}
            />
            <ProductsContainer status={status} products={sortedData}/>
        </div>
    )
};

export default AllSales;