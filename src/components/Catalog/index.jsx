import { Button } from '@mui/material';
import styles from './index.module.css';
import CategoriesContainer from '../CategoriesContainer';

function Catalog () {
    return(
        <section>
            <div className={styles.catalog_wrapper}>
                <h3>Catalog</h3>
                <Button variant='contained'>All categories </Button>
                <CategoriesContainer />
            </div>
        </section>
    )
};

export default Catalog;