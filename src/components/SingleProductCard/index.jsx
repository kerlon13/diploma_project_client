import { Alert, Button, Snackbar } from "@mui/material";
import { BASE_URL } from "../../utils";
import styles from './index.module.css';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCartItemQuantity } from "../../core/redux/store/slices/cartSlice";
import { useState } from "react";

function SingleProductCard ({id, title, image, discont_price, price, description}) {
    const url = `${BASE_URL}${image}`;
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const handleOpenSnackbar = () => {
        setIsSnackbarOpen(true);
      };
    
      const handleCloseSnackbar = () => {
        setIsSnackbarOpen(false);
      };

    const handleAddToCart = (event) => {
        event.stopPropagation();
        const cartItem = cartItems.find((item) => item.id === id);
        if (cartItem) {
          dispatch(updateCartItemQuantity({ id, quantity: cartItem.quantity + 1 }));
        } else {
          dispatch(addToCart({ id, title, price,discont_price, image, quantity: 1 }));
        }
        handleOpenSnackbar();
    };

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
                        onClick={handleAddToCart}
                    >
                        To cart
                    </Button>
                    <div className={styles.description}>
                        <p className={styles.description_title}>Description</p>
                        <p className={styles.description_text}>{description}</p>
                    </div>
                </div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isSnackbarOpen}
                autoHideDuration={3000} 
                onClose={handleCloseSnackbar}
                >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '300px' }}>
                    Product added to cart!
                </Alert>
            </Snackbar>
        </div>
    )
};

export default SingleProductCard;