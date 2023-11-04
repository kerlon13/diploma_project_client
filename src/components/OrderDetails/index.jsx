import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
import { calculateOrderTotal } from '../../utils';
import { Box, Button,CircularProgress,Modal,TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { sendOrder, resetOrderStatus } from '../../core/redux/store/slices/orderSlice';

function OrderDetails () {
    const cartItems = useSelector((state) => state.cart);
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();
    const orderStatus = useSelector((state) => state.order.status);
    console.log(orderStatus);
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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        dispatch(resetOrderStatus());
    };

    useEffect(() => {
        if (orderStatus === 'resolved') {
          setIsModalOpen(true);
        }
    }, [orderStatus]);
    
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
            {orderStatus === 'loading' ? (
            <CircularProgress color="success" style={{marginTop:"25px"}}/> 
            ) : (
            <Button
                style={{background: '#393', borderRadius: '5px', marginTop:"25px", width: "100%"}} 
                variant='contained'
                onClick={handleOrderSend}
            >
                Order
            </Button>
            )}

            <Modal open={isModalOpen} onClose={handleCloseModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box p={3} bgcolor="white" borderRadius={4}>
                <Typography variant="h5" gutterBottom>
                    Order Confirmation
                </Typography>
                <Typography variant="body1">
                    Your order has been successfully sent!
                </Typography>
                <Button 
                    variant="contained" 
                    onClick={handleCloseModal}
                    style={{background: '#393', borderRadius: '5px', marginTop:"25px", width: "100%"}} 
                >
                    Close
                </Button>
                </Box>
            </Modal> 
        </div>
 )
};

export default OrderDetails;