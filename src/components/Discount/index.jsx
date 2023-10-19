import styles from './index.module.css';
import discountImg from '../../utils';
import { PhoneInput } from 'react-international-phone';
import { useState } from 'react';
import 'react-international-phone/style.css';
import { Button } from '@mui/material';

function Discount () {

    const [phone, setPhone] = useState('');

    return (
        <section className={styles.discount}>
            <div className={styles.discount_wrapper}>
                <div className={styles.img_container}>
                    <img src={discountImg} alt='Discount image'/>
                </div>
                <div>
                    <h3 className={styles.discount_title}>5% off</h3>
                    <p className={styles.discount_text}>on the first order</p>
                    <PhoneInput
                        className={styles.phone_input}
                        defaultCountry="ua"
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                    />
                    <Button 
                        style={{color: "white", 
                            backgroundColor: "green", 
                            border: "1px solid white",
                            width:"473px",
                            marginTop:"30px"
                            }}
                        variant='contained'
                    >
                        Get a discount
                    </Button>
                </div>
            </div>
        </section>
    )
};

export default Discount;