import CartProductCard from "../CartProductCard";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { emptyCartIcon } from "../../utils";

function CartContainer() {
    const cartItems = useSelector((state) => state.cart);
    
    return (
        <>
            {cartItems.length ? (
                <div className={styles.cart_container}>
                    {cartItems.map((cartItem) => (
                        <CartProductCard key={cartItem.id} {...cartItem}/>
                    ))}
                </div>
            ) : (
                <img src={emptyCartIcon} className={styles.empty_cart}/>
            )}
            
        </>
        
    )
};

export default CartContainer;