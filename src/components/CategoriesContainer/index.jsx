import { useSelector } from "react-redux";
import CategoryCard from "../CategoryCard";
import styles from './index.module.css';

function CategoriesContainer () {
    const { categoriesData, status, error } = useSelector((state) => state.categories);
    console.log(categoriesData);

    return (
        <div className={styles.categories_container}>
            {categoriesData.slice(0, 4).map((category, ind) => (
                <CategoryCard key={category.id} {...category}/>
            ))}
        </div>
    )
}

export default CategoriesContainer;