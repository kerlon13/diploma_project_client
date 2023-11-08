import { useDispatch } from 'react-redux';
import CartContainer from '../../components/CartContainer';
import OrderDetails from '../../components/OrderDetails';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

function Cart() {

    return (
        <div className={styles.cart_wrapper}>
            <h3 className={styles.cart_title}>Shopping cart</h3>
            <div className={styles.link_container}>
                <Link to='/' className={styles.link}>Back to the store</Link>
            </div>
            <div className={styles.order_container}>
                <CartContainer />
                <OrderDetails />
            </div>
        </div>
    )
};

export default Cart;