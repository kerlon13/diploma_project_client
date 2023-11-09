import { useParams } from 'react-router';
import styles from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../core/redux/store/slices/productsSlice';
import { Skeleton } from '@mui/material';
import SingleProductCard from '../../components/SingleProductCard';

function SingleProduct() {
    const {product_id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts(product_id));
    }, [dispatch, product_id]);

    const { productsData, status } = useSelector((state) => state.products);

    return (
        <div className={styles.singleProduct_wrapper}>
            {status !== 'loading' && productsData[0] ? (
            <SingleProductCard {...productsData[0]}/>
            ) : (
            <Skeleton variant="rectangular" width={800} height={350} />
            ) } 
        </div>
    )
};

export default SingleProduct;