import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../core/redux/store/slices/categoriesSlice';
import CategoriesContainer from '../../components/CategoriesContainer';
import styles from './index.module.css';
import { useEffect } from 'react';

function Categories() {
    const { categoriesData, status } = useSelector((state) => state.categories);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCategories())
    }, []);

    return (
        <div className={styles.categories_wrapper}>
            <h2>Categories</h2>
            <CategoriesContainer categoriesData={categoriesData} status={status} />
        </div>
    )
};

export default Categories;