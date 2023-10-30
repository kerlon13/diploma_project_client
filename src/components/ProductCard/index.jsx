import { Button, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { BASE_URL } from "../../utils";
import styles from "./index.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ id, discont_price, image, price, title }) {
  const url = `${BASE_URL}${image}`;
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation(); 
  };

  return (
    <div>
    <Link to={`/products/${id}`} style={{ maxWidth: "100%", height: 500, textDecoration: "none" }}>
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{ height: "100%", position: "relative" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={url}
            alt={title}
            sx={{ height: 400, objectFit: "cover" }}
          />

          <CardContent >
            <div className={styles.price_container}>
              <p className={styles.discount_price}>{discont_price ? discont_price : price}$</p>
              {discont_price ? <p className={styles.price}>{price}$</p> : null}
              {discont_price ? <p className={styles.amount_sale}>- {Math.round(100 - (discont_price / price) * 100)} %</p> : null}
            </div>
            <p className={styles.description}>{title}</p>
          </CardContent>
        </CardActionArea>
        {isHovered && (
          <div className={styles.addToCartContainer} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <Button 
                variant="contained" 
                color="primary"
                style={{borderRadius:"21px", border: "2px solid #393", background: "#F1FFF1", color: "rgba(51, 153, 51, 1)"}}
                onClick={handleClick}
                >
              Add to cart
            </Button>
          </div>
        )}
      </Card>
    </Link>
    </div>
  );
}

export default ProductCard;






