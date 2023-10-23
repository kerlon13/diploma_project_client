import { useSelector } from 'react-redux';
import styles from './index.module.css';
import ProductsContainer from '../../components/ProductsContainer';

function AllSales() {
    const { productsData, status } = useSelector((state) => state.products);

    const discountProducts = productsData.filter(
        (product) => product.discont_price !== null
    );

    return (
        <div className={styles.AllSales_wrapper}>
            <h3>All sales</h3>
            <ProductsContainer status={status} products={discountProducts}/>
        </div>
    )
};

export default AllSales;