import { useParams } from 'react-router';
import styles from './index.module.css';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getCategoryProducts } from '../../core/redux/store/slices/singleCategorySlice';
import ProductsContainer from '../../components/ProductsContainer';

function SingleCategory() {
    const {category_id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryProducts(category_id));
    }, []);

    return (
        <div>
            <ProductsContainer />
        </div>
    )
};

export default SingleCategory;