import { Button } from '@mui/material';
import styles from './index.module.css';
import CategoriesContainer from '../CategoriesContainer';

function Catalog () {
    return(
        <section>
            <div className={styles.catalog_wrapper}>
                <div className={styles.catalog_btn_container}>
                    <h3>Catalog</h3>
                    <Button 
                        style={{color: "grey", backgroundColor: "white", border: "1px solid grey"}}
                        variant='contained'
                    >
                        All categories 
                    </Button>
                </div>
                <CategoriesContainer />
            </div>
        </section>
    )
};

export default Catalog;