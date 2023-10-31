import styles from "./index.module.css";
import { plusIcon, minusIcon } from "../../utils";

function CartButtonGroup ({count}) {
    return (
        <div className={styles.btnGroup_container}>
            <button><img src={minusIcon} alt="minus"/></button>
            <span>{count}</span>
            <button><img src={plusIcon} alt="plus"/></button>
        </div>
    )
};

export default CartButtonGroup;