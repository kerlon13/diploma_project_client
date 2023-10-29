import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
import ProductsContainer from '../../components/ProductsContainer';
import InputPriceSelection from '../../components/InputPriceSelection';
import { getProducts } from '../../core/redux/store/slices/productsSlice';
import { setSortingMethod } from '../../core/redux/store/slices/sortingSlice';
import { sortProducts } from '../../utils';
import { useEffect } from 'react';
import { useState } from 'react';

function AllSales() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const { productsData, status } = useSelector((state) => state.products);
    const sortOption = useSelector((state) => state.sorting);

    const discountProducts = productsData.filter(
        (product) => product.discont_price !== null
    );
    const [sortedData, setSortedData] = useState(discountProducts);

    const handleSortChange = (newSortOption) => {
        dispatch(setSortingMethod(newSortOption.target.value));
    };

    useEffect(() => {
        let sortedProducts = sortProducts(discountProducts, sortOption);
        setSortedData(sortedProducts);
    }, [sortOption, productsData]);

    return (
        <div className={styles.AllSales_wrapper}>
            <h3 className={styles.sales_title}>Products with sale</h3>
            <InputPriceSelection sortOption={sortOption} handleSortChange={handleSortChange}/>
            <ProductsContainer status={status} products={sortedData}/>
        </div>
    )
};

export default AllSales;