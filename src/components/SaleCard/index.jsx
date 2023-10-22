import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { BASE_URL } from "../../utils";
import styles from "./index.module.css";

function SaleCard ({discont_price, image, price, title}) {
    const url = `${BASE_URL}${image}`;

    return (
        <Card sx={{ width: "23%" , height: 350}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={url}
                    alt={title}
                    sx={{maxHeight: 250}}
                />
                <CardContent>
                    <div className={styles.price_container}>
                        <p className={styles.discount_price}>{discont_price}$</p>
                        <p className={styles.price}>{price}$</p>
                        <p className={styles.amount_sale}>-{Math.round(100 - discont_price / price * 100)} %</p>
                    </div>
                    <p className={styles.description}>{title}</p>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default SaleCard;