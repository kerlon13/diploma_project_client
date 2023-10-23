import { useSelector } from 'react-redux';
import styles from './index.module.css';
import ProductsContainer from '../../components/ProductsContainer';

function AllProducts() {
    const { productsData, status } = useSelector((state) => state.products);
    
    return (
        <div className={styles.products_wrapper}>
            <h3>All products</h3>
            <ProductsContainer status={status} products={productsData}/>
        </div>
    )
};

export default AllProducts;