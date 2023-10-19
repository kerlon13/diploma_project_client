import Catalog from '../../components/Catalog';
import Discount from '../../components/Discount';
import Sale from '../../components/Sale';
import styles from './index.module.css';

function Homepage() {

    return (
        <>
            <Sale />
            <Catalog />
            <Discount />
        </>
    )
};

export default Homepage;