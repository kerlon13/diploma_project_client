import styles from './index.module.css';
import discountImg from '../../utils';
import { useForm, Controller} from 'react-hook-form';
import { sendSale } from '../../core/redux/store/slices/saleSlice';
import { useDispatch, useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import { resetSaleStatus } from '../../core/redux/store/slices/saleSlice';
import { useEffect } from 'react';
import ModalWindow from '../ModalWindow';

function Discount ({saleRef}) {
    const { register,control, handleSubmit, formState: { errors }, reset } = useForm({
        mode:"onChange",
        defaultValues: {
            phone: ""
        }
    });
    
    const dispatch = useDispatch();
    const saleStatus = useSelector((state) => state.sale.status);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        dispatch(resetSaleStatus());
    };
    const onSubmit = (data) => {
        dispatch(sendSale(data));
        reset({ phone: "" });
    };

    useEffect(() => {
        if (saleStatus === 'resolved') {
          setIsModalOpen(true);
        }
    }, [saleStatus]);

    return (
        <section className={styles.discount}>
            <div className={styles.discount_wrapper} ref={saleRef}>
                <div className={styles.img_container}>
                    <img src={discountImg} alt='Discount image' className={styles.img_discount}/>
                </div>
                <div>
                    <h3 className={styles.discount_title}>5% off</h3>
                    <p className={styles.discount_text}>on the first order</p>
                    <form className={styles.registration_form} onSubmit={handleSubmit(onSubmit)} >
                        <div>
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
                                                placeholder="+4"
                                                className={styles.phone_input}
                                            />
                                        )}
                                    </InputMask>
                                )}
                            />
                            {errors.phone && <p className={styles.error_message}>{errors.phone.message}</p>}
                        </div>
                        <button type='submit' className={styles.submit_button}>Get a discount</button>
                    </form>
                </div>
            </div>
            <ModalWindow
                message={"Discount request has been sent successfully!"}
                isModalOpen={isModalOpen}
                handleCloseModal={handleCloseModal}
            />
        </section>
    )
};

export default Discount;