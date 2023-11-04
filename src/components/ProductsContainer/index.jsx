import styles from './index.module.css';
import ProductCard from "../ProductCard";
import { Skeleton } from "@mui/material";

function ProductsContainer ({products, status}) {

    return (
        <div className={styles.products_container}>    
            <div className={styles.products_wrapper}>
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







