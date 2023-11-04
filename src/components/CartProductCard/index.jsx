import styles from "./index.module.css";
import { BASE_URL } from "../../utils";
import CartButtonGroup from "../../UI/CartButtonGroup";
import { closeIcon } from "../../utils";
import { removeFromCart } from "../../core/redux/store/slices/cartSlice";
import { useDispatch } from "react-redux";

function CartProductCard ({id, title, price, discont_price, image, quantity}) {
    const url = `${BASE_URL}${image}`;
    const dispatch = useDispatch();

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(id))
    };

    return (
        <div className={styles.card_container}>
            <div className={styles.img_container}><img src={url} alt={title} /></div>
            <div className={styles.title_container}>
                <p className={styles.title}>{title}</p>
                <CartButtonGroup  id={id}/>
            </div>
            <div className={styles.price_container}>
                <p className={styles.discount_price}>{discont_price ? discont_price : price}$</p>
                {discont_price ? <p className={styles.price}>{price}$</p> : null}
            </div>
            <div>
                <button 
                    className={styles.close_btn}
                    onClick={handleRemoveFromCart}
                >
                    <img src={closeIcon} alt="close"/>
                </button>
            </div>
        </div>
    )
};

export default CartProductCard;