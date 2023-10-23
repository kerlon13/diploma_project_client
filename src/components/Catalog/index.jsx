import { Button } from '@mui/material';
import styles from './index.module.css';
import CategoriesContainer from '../CategoriesContainer';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function Catalog () {
    
    return(
        <section >
            <div className={styles.catalog_wrapper}>
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
                <CategoriesContainer isAllCategories={false} />
            </div>
        </section>
    )
};

export default Catalog;