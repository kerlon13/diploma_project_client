import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import SaleCard from "../SaleCard";
import styles from "./index.module.css"

function SalesContainer () {
    const { productsData, status } = useSelector((state) => state.products);
    
    const discountProducts = productsData.filter(
        (product) => product.discont_price !== null
    );
        console.log(discountProducts);
    return (
        <div className={styles.sales_container}>
            {status !== 'loading' ? (
                discountProducts.slice(0, 4).map((product) => (
                    <SaleCard key={product.id} {...product} />
                ))
            ) : (
                
                Array.from({ length: 4 }).map((_, index) => (
                    <div key={index}>
                        <Skeleton variant="rectangular" width={320} height={350} />
                        <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
                    </div>
                ))   
            )}
        </div>
    )
}

export default SalesContainer;