import { useSelector } from "react-redux";
import CategoryCard from "../CategoryCard";
import styles from './index.module.css';
import { Skeleton } from "@mui/material";

function CategoriesContainer ({isAllCategories}) {
    const { categoriesData, status } = useSelector((state) => state.categories);
    const displayedCategories = isAllCategories ? categoriesData : categoriesData.slice(0, 4);

    return (
        <div className={styles.categories_container}>
            {status !== 'loading' ? (
                displayedCategories.map((category) => (
                    <CategoryCard key={category.id} {...category} />
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
    )
}

export default CategoriesContainer;