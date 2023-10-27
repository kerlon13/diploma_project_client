import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
import ProductsContainer from '../../components/ProductsContainer';
import InputPriceSelection from '../../components/InputPriceSelection';
import { getProducts } from '../../core/redux/store/slices/productsSlice';
import { useState } from 'react';
import { useEffect } from 'react';

function AllProducts() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const { productsData, status } = useSelector((state) => state.products);
    const [discount, setDiscount] = useState(false);

    const handleDiscountChange = (event) => {
        setDiscount(event.target.checked);
    };

    return (
        <div className={styles.products_wrapper}>
            <h3>All products</h3>
            <InputPriceSelection isDiscount={true} discount={discount} handleDiscountChange={handleDiscountChange} />
            <ProductsContainer status={status} products={productsData} discount={discount}/>
        </div>
    )
};

export default AllProducts;