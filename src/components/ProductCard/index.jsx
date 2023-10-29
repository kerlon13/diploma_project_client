import { Button, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { BASE_URL } from "../../utils";
import styles from "./index.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard ({id, discont_price, image, price, title}) {
    const url = `${BASE_URL}${image}`;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link to={`/products/${id}/#anchor`} style={{ maxWidth: "100%", height: 500, textDecoration: "none" }}>
            <Card 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{height: "100%"}}
                >
                <CardActionArea>
                <CardMedia
                        component="img"
                        image={url}
                        alt={title}
                        sx={{ height: 400, objectFit: "cover"}}
                    />
                    {/* {isHovered && (
                        <div className={styles.addToCartContainer}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={styles.addToCartButton}
                            >
                                Add to cart
                            </Button>
                        </div>
                    )} */}
                    <CardContent>
                        <div className={styles.price_container}>
                            <p className={styles.discount_price}>{discont_price ? discont_price : price}$</p>
                            {discont_price ? <p className={styles.price}>{price}$</p> : null}
                            {discont_price ? <p className={styles.amount_sale}>- {Math.round(100 - discont_price / price * 100)} %</p> : null}
                        </div>
                        <p className={styles.description}>{title}</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

export default ProductCard;
