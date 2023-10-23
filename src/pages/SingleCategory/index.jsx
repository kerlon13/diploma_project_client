import { useParams } from 'react-router';
import styles from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategoryProducts } from '../../core/redux/store/slices/singleCategorySlice';

function SingleCategory() {
    const {category_id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryProducts(category_id));
    }, []);

    const { singleCategoryData, status } = useSelector((state) => state.category);
    console.log(singleCategoryData);

    return (
        <div className={styles.category_wrapper}>
            <h3>{singleCategoryData.category.title}</h3>
            
        </div>
    )
};

export default SingleCategory;