import Catalog from '../../components/Catalog';
import Discount from '../../components/Discount';
import Sale from '../../components/Sale';
import SalesSection from '../../components/SalesSection';
import styles from './index.module.css';

function Homepage({catalogRef}) {
    
    return (
        <>
            <Sale />
            <Catalog catalogRef={catalogRef} />
            <Discount />
            <SalesSection />
        </>
    )
};

export default Homepage;