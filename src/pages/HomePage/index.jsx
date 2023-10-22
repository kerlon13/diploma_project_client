import Catalog from '../../components/Catalog';
import Discount from '../../components/Discount';
import Sale from '../../components/Sale';
import SalesSection from '../../components/SalesSection';
import styles from './index.module.css';

function Homepage() {

    return (
        <>
            <Sale />
            <Catalog />
            <Discount />
            <SalesSection />
        </>
    )
};

export default Homepage;