import { Button } from "@mui/material";
import { BASE_URL } from "../../utils";
import styles from './index.module.css';

function SingleProductCard ({title, image, discont_price, price, description}) {
    const url = `${BASE_URL}${image}`;
    console.log(title);
    return (
        <div>
            <h3 className={styles.product_title}>{title}</h3>
            <div className={styles.product_wrapper}>
                <div className={styles.img_container}>
                    <img src={url} alt={title} className={styles.product_img}/>
                </div>
                <div className={styles.description_container}>
                    <div className={styles.price_container}>
                        <p className={styles.discount_price}>{discont_price ? discont_price : price}$</p>
                        {discont_price ? <p className={styles.price}>{price}$</p> : null}
                        {discont_price ? <p className={styles.amount_sale}>- {Math.round(100 - discont_price / price * 100)} %</p> : null}
                    </div>
                    <Button 
                        style={{background: '#393', borderRadius: '5px', marginBottom:'40px', width: '70%', height: '70px'}} 
                        variant='contained'
                    >
                        To cart
                    </Button>
                    <div className={styles.description}>
                        <p className={styles.description_title}>Description</p>
                        <p className={styles.description_text}>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SingleProductCard;