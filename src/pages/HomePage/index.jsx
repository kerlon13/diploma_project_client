import { useEffect } from 'react';
import Catalog from '../../components/Catalog';
import Discount from '../../components/Discount';
import Sale from '../../components/Sale';
import SalesSection from '../../components/SalesSection';
import styles from './index.module.css';

function Homepage({catalogRef, saleRef}) {

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