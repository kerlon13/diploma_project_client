import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
import ProductsContainer from '../../components/ProductsContainer';
import InputPriceSelection from '../../components/InputPriceSelection';
import { getProducts } from '../../core/redux/store/slices/productsSlice';
import { useEffect } from 'react';

function AllSales() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const { productsData, status } = useSelector((state) => state.products);

    const discountProducts = productsData.filter(
        (product) => product.discont_price !== null
    );

    return (
        <div className={styles.AllSales_wrapper}>
            <h3 className={styles.sales_title}>Products with sale</h3>
            <InputPriceSelection />
            <ProductsContainer status={status} products={discountProducts}/>
        </div>
    )
};

export default AllSales;