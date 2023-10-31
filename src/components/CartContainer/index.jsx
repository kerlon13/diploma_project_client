import CartProductCard from "../CartProductCard";
import styles from "./index.module.css";
import { useSelector } from "react-redux";

function CartContainer() {
    const cartItems = useSelector((state) => state.cart);

    return (
        <div className={styles.cart_container}>
            {cartItems.map((cartItem) => (
                <CartProductCard key={cartItem.id} {...cartItem}/>
            ))}
        </div>
    )
};

export default CartContainer;