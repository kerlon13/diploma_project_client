import { useSelector } from "react-redux";
import styles from './index.module.css';
import ProductCard from "../ProductCard";
import { Skeleton } from "@mui/material";

function ProductsContainer ({products, status}) {

    return (
        <div className={styles.category_container}>
            
        <div className={styles.category_wrapper}>
            {status !== 'loading' && products ? (
                products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))
            ) : (
                Array.from({ length: 4 }).map((_, index) => (
                    <div key={index}>
                        <Skeleton variant="rectangular" width={320} height={350} />
                        <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
                    </div>
                )) 
            )}
        </div>
        </div>
    )
}

export default ProductsContainer;
