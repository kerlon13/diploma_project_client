import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
import ProductsContainer from '../../components/ProductsContainer';
import InputPriceSelection from '../../components/InputPriceSelection';
import { getProducts, setMinPrice, setMaxPrice } from '../../core/redux/store/slices/productsSlice';
import { setSortingMethod } from '../../core/redux/store/slices/sortingSlice';
import { useEffect, useState } from 'react';
import { sortProducts } from '../../utils';

function AllProducts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMinPrice(''));
    dispatch(setMaxPrice(''));
    dispatch(setSortingMethod('default'))
  }, []);

  const { productsData, status } = useSelector((state) => state.products);
  const [discount, setDiscount] = useState(false);
  const [sortedData, setSortedData] = useState(productsData);
  const sortOption = useSelector((state) => state.sorting);
  const minPrice = useSelector((state) => state.products.minPrice);
  const maxPrice = useSelector((state) => state.products.maxPrice);

  useEffect(() => {
    dispatch(getProducts());
  }, [minPrice, maxPrice, sortOption, discount]);

  const handleDiscountChange = (event) => {
    setDiscount(event.target.checked);
  };

  const handleMinPrice = (event) => {
    dispatch(setMinPrice(event.target.value));
  }
  
  const handleMaxPrice = (event) => {
    dispatch(setMaxPrice(event.target.value));
  }
  
  const handleSortChange = (newSortOption) => {
    dispatch(setSortingMethod(newSortOption.target.value));
  };

  useEffect(() => {
    const filteredProducts = minPrice ? productsData.filter((product) => {
        const price = parseFloat(product.price);
        return price >= minPrice && price <= maxPrice;
    }) : productsData;

    let sortedProducts = sortProducts(filteredProducts, sortOption);

    if (discount) {
      sortedProducts = sortedProducts.filter((product) => product.discont_price !== null);
    }

    setSortedData(sortedProducts);
  }, [sortOption, discount, productsData, minPrice, maxPrice]);

  return (
    <div className={styles.products_wrapper}>
      <h3>All products</h3>
      <InputPriceSelection
        isDiscount={true}
        discount={discount}
        handleDiscountChange={handleDiscountChange}
        sortOption={sortOption}
        handleSortChange={handleSortChange}
        minPrice={minPrice}
        maxPrice={maxPrice}
        handleMinPrice={handleMinPrice}
        handleMaxPrice={handleMaxPrice}
      />
      <ProductsContainer status={status} products={sortedData}/>
    </div>
  );
}

export default AllProducts;
