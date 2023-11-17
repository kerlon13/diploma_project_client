import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
import { calculateOrderTotal } from '../../utils';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button,CircularProgress,Modal, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { sendOrder, resetOrderStatus } from '../../core/redux/store/slices/orderSlice';
import { resetCart } from '../../core/redux/store/slices/cartSlice';
import InputMask from 'react-input-mask';

function OrderDetails () {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const orderStatus = useSelector((state) => state.order.status);
    const { handleSubmit,control, formState: { errors }, reset } = useForm({
        mode:"onChange",
        defaultValues: {
            phone: ""
        }
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        dispatch(resetOrderStatus());
        dispatch(resetCart());
        localStorage.setItem('cart', JSON.stringify([]));
    };

    const onSubmit = (data) => {
        if(cartItems.length !== 0){
            const orderData = {
                phone: data.phone,
                items: cartItems, 
            };
            dispatch(sendOrder(orderData));
            reset({ phone: "" });
        } 
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="phone"
                    control={control}
                    rules={{
                        required: 'This field is required',
                        pattern: {
                            value: /^\+\d{1,3}\s\(\d{3}\)\s\d{3}-\d{4}$/,
                            message: 'Please enter a valid phone number'
                        },
                    }}
                    render={({ field }) => (
                        <InputMask
                            mask="+4 (999) 999-9999"
                            maskChar="_"
                            value={field.value}
                            onChange={field.onChange}
                        >
                            {(inputProps) => (
                                <input
                                    type="text"
                                    {...inputProps}
                                    placeholder="Phone number"
                                    className={styles.phone_input}
                                />
                            )}
                        </InputMask>
                    )}
                />
                {errors.phone && <p className={styles.error_message}>{errors.phone.message}</p>}
                {orderStatus === 'loading' ? (
                <CircularProgress color="success" style={{marginTop:"25px"}}/> 
                ) : (
                <Button
                    type='submit'
                    style={{background: '#393', borderRadius: '5px', width: "100%", maxHeight: "75px", borderRadius :"17px", fontSize: "1.8rem"}} 
                    variant='contained'
                >
                    Order
                </Button>
                )}
            </form>
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