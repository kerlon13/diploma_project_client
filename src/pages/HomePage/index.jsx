import { useEffect } from 'react';
import Catalog from '../../components/Catalog';
import Discount from '../../components/Discount';
import Sale from '../../components/Sale';
import SalesSection from '../../components/SalesSection';
import { getCategories } from '../../core/redux/store/slices/categoriesSlice';
import { getProducts } from '../../core/redux/store/slices/productsSlice';
import styles from './index.module.css';
import { useDispatch } from 'react-redux';

function Homepage({catalogRef, saleRef}) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
    }, []);

    useEffect(() => {
        if (catalogRef.current) {
          catalogRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [catalogRef]);

    return (
        <>
            <Sale saleRef={saleRef}/>
            <Catalog catalogRef={catalogRef} />
            <Discount saleRef={saleRef}/>
            <SalesSection />
        </>
    )
};

export default Homepage;