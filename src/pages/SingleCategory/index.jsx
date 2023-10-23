import { useParams } from 'react-router';
import styles from './index.module.css';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { getCategoryProducts } from '../../core/redux/store/slices/singleCategorySlice';
import ProductsContainer from '../../components/ProductsContainer';
import { Skeleton } from '@mui/material';

function SingleCategory() {
    const {category_id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryProducts(category_id));
    }, []);

    const { singleCategoryData, status } = useSelector((state) => state.category);

    return (
        <div className={styles.category_wrapper}>
            {status !== 'loading' && singleCategoryData && singleCategoryData.data ? (
            <h3>{singleCategoryData.category.title}</h3>
            ) : (
            <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
            ) }
            <ProductsContainer products={singleCategoryData.data} status={status}/>
        </div>
    )
};

export default SingleCategory;