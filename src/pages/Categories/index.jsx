import CategoriesContainer from '../../components/CategoriesContainer';
import styles from './index.module.css';

function Categories() {

    return (
        <div className={styles.categories_wrapper}>
            <h2>Categories</h2>
            <CategoriesContainer isAllCategories={true}/>
        </div>
    )
};

export default Categories;