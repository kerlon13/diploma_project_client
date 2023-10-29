import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
import ProductsContainer from '../../components/ProductsContainer';
import InputPriceSelection from '../../components/InputPriceSelection';
import { getProducts } from '../../core/redux/store/slices/productsSlice';
import { setSortingMethod } from '../../core/redux/store/slices/sortingSlice';
import { useEffect, useState } from 'react';
import { sortProducts } from '../../utils';

function AllProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { productsData, status } = useSelector((state) => state.products);
  const [discount, setDiscount] = useState(false);
  const [sortedData, setSortedData] = useState(productsData);
  const sortOption = useSelector((state) => state.sorting);
  
  const handleDiscountChange = (event) => {
    setDiscount(event.target.checked);
  };

  const handleSortChange = (newSortOption) => {
    console.log(newSortOption.target.value);
    dispatch(setSortingMethod(newSortOption.target.value));
  };

  useEffect(() => {
    let sortedProducts = sortProducts(productsData, sortOption);

    if (discount) {
      sortedProducts = sortedProducts.filter((product) => product.discont_price !== null);
    }

    setSortedData(sortedProducts);
  }, [sortOption, discount, productsData]);

  return (
    <div className={styles.products_wrapper}>
      <h3>All products</h3>
      <InputPriceSelection
        isDiscount={true}
        discount={discount}
        handleDiscountChange={handleDiscountChange}
        sortOption={sortOption}
        handleSortChange={handleSortChange}
      />
      <ProductsContainer status={status} products={sortedData}/>
    </div>
  );
}

export default AllProducts;
