import { useParams } from 'react-router';
import styles from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../core/redux/store/slices/productsSlice';

function SingleProduct() {
    const {product_id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts(product_id));
    }, []);

    const { productsData, status } = useSelector((state) => state.products);
    console.log(productsData);

    return <>SingleProduct</>
};

export default SingleProduct;