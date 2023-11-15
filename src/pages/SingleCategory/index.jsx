import { useParams } from 'react-router';
import styles from './index.module.css';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { getCategoryProducts} from '../../core/redux/store/slices/singleCategorySlice';
import { setMinPrice, setMaxPrice} from '../../core/redux/store/slices/productsSlice';
import { sortProducts } from '../../utils';
import { setSortingMethod } from '../../core/redux/store/slices/sortingSlice';
import ProductsContainer from '../../components/ProductsContainer';
import { Skeleton } from '@mui/material';
import { useState } from 'react';
import InputPriceSelection from '../../components/InputPriceSelection';

function SingleCategory() {
    const {category_id} = useParams();
    const dispatch = useDispatch();
    const { singleCategoryData, status } = useSelector((state) => state.category);
    const [discount, setDiscount] = useState(false);
    const [sortedData, setSortedData] = useState(singleCategoryData.data);
    const sortOption = useSelector((state) => state.sorting);
    const minPrice = useSelector((state) => state.products.minPrice);
    const maxPrice = useSelector((state) => state.products.maxPrice);

    useEffect(() => {
        dispatch(getCategoryProducts(category_id));
        dispatch(setMinPrice(''));
        dispatch(setMaxPrice(''));
        dispatch(setSortingMethod('default'))
    }, []);

    useEffect(() => {
        dispatch(getCategoryProducts(category_id));
    }, [minPrice, maxPrice, discount, sortOption]);
    
    const handleDiscountChange = (event) => {
        setDiscount(event.target.checked);
    };

    const handleMinPrice = (event) => {
        dispatch(setMinPrice(event.target.value));
    }
    
    const handleMaxPrice = (event) => {
        dispatch(setMaxPrice(event.target.value));
    }
    
    const handleSortChange = (newSortOption) => {
        dispatch(setSortingMethod(newSortOption.target.value));
    };

    useEffect(() => {
        if (singleCategoryData.data) {
        const filteredProducts = singleCategoryData.data.filter((product) => {
                const price = parseFloat(product.price);
                if (minPrice && maxPrice) {
                    return price >= minPrice && price <= maxPrice;
                  } else if (minPrice) {
                    return price >= minPrice;
                  } else if (maxPrice) {
                    return price <= maxPrice;
                  }
              
                  return true;
            });
    
        let sortedProducts = sortProducts(filteredProducts, sortOption);
    
        if (discount) {
            sortedProducts = sortedProducts.filter(
            (product) => product.discont_price !== null
            );
        }
        setSortedData(sortedProducts);
        }
    }, [sortOption, discount, singleCategoryData, minPrice, maxPrice]);
  
    return (
        <div className={styles.category_wrapper}>
            {status !== 'loading' && singleCategoryData && singleCategoryData.data ? (
                <h3>{singleCategoryData.category.title}</h3>
            ) : (
            <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
            ) }
            <InputPriceSelection
                isDiscount={true}
                discount={discount}
                handleDiscountChange={handleDiscountChange}
                sortOption={sortOption}
                handleSortChange={handleSortChange}
                minPrice={minPrice}
                maxPrice={maxPrice}
                handleMinPrice={handleMinPrice}
                handleMaxPrice={handleMaxPrice}
            />
            <ProductsContainer products={sortedData} status={status}/>
        </div>
    )
};

export default SingleCategory;