import CategoriesContainer from '../../components/CategoriesContainer';
import styles from './index.module.css';

function Categories() {

    return (
        <div className={styles.categories_wrapper}>
            <h2>Categories</h2>
            <CategoriesContainer />
        </div>
    )
};

export default Categories;