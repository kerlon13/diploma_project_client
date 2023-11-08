import styles from "./index.module.css";
import { plusIcon, minusIcon } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartItemQuantity } from "../../core/redux/store/slices/cartSlice";
import { useEffect } from "react";

function CartButtonGroup ({id}) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);
    const {quantity} = cartItems.find((item) => item.id === id);

    const incrementCount = () => {
        dispatch(updateCartItemQuantity({ id, quantity: quantity + 1 }));
    };

    const decrementCount = () => {
        quantity === 1 ? dispatch(removeFromCart(id)) : dispatch(updateCartItemQuantity({ id, quantity: quantity - 1 }))
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
      }, [cartItems]);

    return (
        <div className={styles.btnGroup_container}>
            <button onClick={decrementCount}><img src={minusIcon} alt="minus"/></button>
            <span>{quantity}</span>
            <button onClick={incrementCount}><img src={plusIcon} alt="plus"/></button>
        </div>
    )
};

export default CartButtonGroup;