import { useSelector } from "react-redux";
import CategoryCard from "../CategoryCard";
import styles from './index.module.css';
import { Skeleton } from "@mui/material";

function CategoriesContainer () {
    const { categoriesData, status } = useSelector((state) => state.categories);
    console.log(categoriesData, status);

    return (
        <div className={styles.categories_container}>
            {status !== 'loading' ? (
                categoriesData.slice(0, 4).map((category, ind) => (
                    <CategoryCard key={category.id} {...category} />
                ))
            ) : (
                
                Array.from({ length: 4 }).map((_, index) => (
                    <div>
                        <Skeleton variant="rectangular" width={320} height={350} />
                        <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
                    </div>
                ))   
            )}
        </div>
    )
}

export default CategoriesContainer;