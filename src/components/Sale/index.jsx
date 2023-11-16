import { Button } from '@mui/material';
import styles from './index.module.css';
import saleImg from '../../assets/images/saleImg.svg';

function Sale ({saleRef}) {

    const scrollToDiscount = () => {
        if (saleRef.current) {
            saleRef.current.scrollIntoView({ behavior: 'smooth' });
          }
    };

    return (
        <section className={styles.sale_section}>
            <div className={styles.sale_wrapper}>
                <div>
                    <h2 className={styles.sale_title}>Sale</h2>
                    <p className={styles.sale_text}>New season</p>
                    <Button
                        style={{background: "white", borderRadius: "13px", color: "black", padding: "25px 50px", fontWeight: "bold"}}
                        variant='contained'
                        onClick={scrollToDiscount}
                    >
                        Sale
                    </Button>
                </div>
                <div className={styles.img_container}>
                    <img src={saleImg} alt='sale image' className={styles.sale_img}/>
                </div>
            </div>
        </section>
    )
}

export default Sale;