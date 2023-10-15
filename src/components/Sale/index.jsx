import { Button } from '@mui/material';
import styles from './index.module.css';
import saleImg from '../../UI/images/saleImg.svg';

function Sale () {
    return (
        <section className={styles.sale_section}>
            <div className={styles.sale_wrapper}>
                <div>
                    <h2 className={styles.sale_title}>Sale</h2>
                    <p className={styles.sale_text}>New season</p>
                    <Button variant='contained'>Sale</Button>
                </div>
                <div>
                    <img src={saleImg} alt='sale image'/>
                </div>
            </div>
        </section>
    )
}

export default Sale;