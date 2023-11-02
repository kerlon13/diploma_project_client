import styles from "./index.module.css";
import { plusIcon, minusIcon } from "../../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../core/redux/store/slices/cartSlice";

function CartButtonGroup ({count, id}) {
    const [currentCount, setCurrentCount] = useState(count);
    const dispatch = useDispatch();

    const incrementCount = () => {
        const newCount = currentCount + 1;
        setCurrentCount(newCount);
    };

    const decrementCount = () => {
        if (currentCount > 0) {
            const newCount = currentCount - 1;
            setCurrentCount(newCount);
        }

        if (currentCount === 1) {
            dispatch(removeFromCart(id));
        }
    };

    return (
        <div className={styles.btnGroup_container}>
            <button onClick={decrementCount}><img src={minusIcon} alt="minus"/></button>
            <span>{currentCount}</span>
            <button onClick={incrementCount}><img src={plusIcon} alt="plus"/></button>
        </div>
    )
};

export default CartButtonGroup;