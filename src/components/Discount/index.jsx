import styles from './index.module.css';
import discountImg from '../../utils';
import { useForm } from 'react-hook-form';
import { sendSale } from '../../core/redux/store/slices/saleSlice';
import { useDispatch, useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import { resetSaleStatus } from '../../core/redux/store/slices/saleSlice';
import { useEffect } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';

function Discount ({saleRef}) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({mode:"onChange"});
    const dispatch = useDispatch();
    const [phone, setPhone] = useState(null);
    const saleStatus = useSelector((state) => state.sale.status);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        dispatch(resetSaleStatus());
    };
    const onSubmit = (data) => {
        dispatch(sendSale(data))
        setPhone("");
    };

    useEffect(() => {
        if (saleStatus === 'resolved') {
          setIsModalOpen(true);
          setPhone(null);
        }
    }, [saleStatus]);

    return (
        <section className={styles.discount}>
            <div className={styles.discount_wrapper} ref={saleRef}>
                <div className={styles.img_container}>
                    <img src={discountImg} alt='Discount image'/>
                </div>
                <div>
                    <h3 className={styles.discount_title}>5% off</h3>
                    <p className={styles.discount_text}>on the first order</p>
                    <form className={styles.registration_form} onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <InputMask
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                                mask="+4 (999) 999-9999"
                                maskChar="_" 
                                {...register('phone', {
                                    required: 'This field is required',
                                    pattern: {
                                        value: /^\+\d{1,3}\s\(\d{3}\)\s\d{3}-\d{4}$/,
                                        message: 'Please enter a valid phone number'
                                    },
                                })} 
                                className={styles.phone_input}
                            />
                            {errors.phone && <p className={styles.error_message}>{errors.phone.message}</p>}
                        </div>
                        <button type='submit' className={styles.submit_button}>Get a discount</button>
                    </form>
                </div>
            </div>
            <Modal open={isModalOpen} onClose={handleCloseModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box p={3} bgcolor="white" borderRadius={4}>
                <Typography variant="h5" gutterBottom>
                    Discount Confirmation
                </Typography>
                <Typography variant="body1">
                    Discount request has been sent successfully!
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
        </section>
    )
};

export default Discount;