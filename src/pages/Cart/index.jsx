import CartContainer from '../../components/CartContainer';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

function Cart() {

    return (
        <div className={styles.cart_wrapper}>
            <h3 className={styles.cart_title}>Shopping cart</h3>
            <div className={styles.link_container}>
                <Link to='/' className={styles.link}>Back to the store</Link>
            </div>
            <div>
                <CartContainer />
            </div>
        </div>
    )
};

export default Cart;