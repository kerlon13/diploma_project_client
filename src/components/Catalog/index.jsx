import { Button } from '@mui/material';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import CategoriesSlider from '../CategoriesSlider';

function Catalog ({catalogRef}) {
    return(
        <section >
            <div className={styles.catalog_wrapper} ref={catalogRef}>
                <div className={styles.catalog_btn_container}>
                    <h3>Catalog</h3>
                    <Link to='/categories'>
                        <Button 
                            style={{color: "grey", backgroundColor: "white", border: "1px solid grey"}}
                            variant='contained'
                        >
                            All categories 
                        </Button>
                    </Link>
                </div>
                <CategoriesSlider />
            </div>
        </section>
    )
};

export default Catalog;