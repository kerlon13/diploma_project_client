import { useSelector } from "react-redux";
import styles from './index.module.css';
import ProductCard from "../ProductCard";
import { Skeleton } from "@mui/material";

function ProductsContainer () {
    const { singleCategoryData, status } = useSelector((state) => state.category);

    return (
        <div className={styles.category_container}>
            {status !== 'loading' && singleCategoryData && singleCategoryData.data ? (
            <h3>{singleCategoryData.category.title}</h3>
            ) : (
            <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
            ) }
        <div className={styles.category_wrapper}>
            {status !== 'loading' && singleCategoryData && singleCategoryData.data ? (
                singleCategoryData.data.map((product) => (
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
