import { notAPageImg } from "../../utils";
import styles from './index.module.css';

function NotAPage () {
    return (
        <div className={styles.page_wrapper}>
            <img src={notAPageImg} alt="404 error"/>
        </div>
    )
};

export default NotAPage;