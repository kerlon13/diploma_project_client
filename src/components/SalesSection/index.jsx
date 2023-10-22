import SalesContainer from "../SalesContainer";
import { Button } from '@mui/material';
import styles from "./index.module.css";

function SalesSection () {
    return(
        <section>
            <div className={styles.sales_wrapper}>
                <div className={styles.sales_btn_container}>
                    <h3>Sale</h3>
                    <Button 
                        style={{color: "grey", backgroundColor: "white", border: "1px solid grey"}}
                        variant='contained'
                    >
                        All sales
                    </Button>
                </div>
                <SalesContainer />
            </div>
        </section>
    )
}

export default SalesSection;