import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
import { calculateOrderTotal } from '../../utils';
import { Button,TextField } from '@mui/material';
import { useState } from 'react';
import { sendOrder } from '../../core/redux/store/slices/orderSlice';

function OrderDetails () {
    const cartItems = useSelector((state) => state.cart);
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();

    const handlePhoneChange = (event) => {
        setPhoneNumber(event.target.value); 
    };

    const handleOrderSend = () => {
        const orderData = {
          phone: phoneNumber,
          items: cartItems, 
        };
        dispatch(sendOrder(orderData));
    }
    
    return (
        <div className={styles.order_details_container}>
            <h4 className={styles.order_title}>Order details</h4>
            <div className={styles.total_container}>
                <p className={styles.total_text}>Total</p>
                <p className={styles.total_amount}>{calculateOrderTotal(cartItems)}</p>
            </div>
            <TextField
                label="Phone number"
                fullWidth
                variant="outlined"
                value={phoneNumber}
                onChange={handlePhoneChange}
            />
            <Button
                style={{background: '#393', borderRadius: '5px', marginTop:"25px", width: "100%"}} 
                variant='contained'
                onClick={handleOrderSend}
            >
                Order
            </Button>
        </div>
 )
};

export default OrderDetails;