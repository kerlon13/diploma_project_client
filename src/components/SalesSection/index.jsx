import { Button } from '@mui/material';
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import ProductsContainer from "../ProductsContainer";
import { useSelector } from "react-redux";

function SalesSection () {
    const { productsData, status } = useSelector((state) => state.products);
    
    const discountProducts = productsData.filter(
        (product) => product.discont_price !== null
    );

    const shuffledProducts = discountProducts.sort(() => Math.random() - 0.5);
    const randomProducts = shuffledProducts.slice(0, 4);

    return(
        <section>
            <div className={styles.sales_wrapper}>
                <div className={styles.sales_btn_container}>
                    <h3>Sale</h3>
                    <Link to='/allSales'>
                        <Button 
                            style={{color: "grey", backgroundColor: "white", border: "1px solid grey"}}
                            variant='contained'
                        >
                            All sales
                        </Button>
                    </Link>
                </div>
                <ProductsContainer status={status} products={randomProducts} />
            </div>
        </section>
    )
}

export default SalesSection;