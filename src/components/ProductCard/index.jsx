import { Button, Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import { BASE_URL } from "../../utils";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCartItemQuantity } from "../../core/redux/store/slices/cartSlice";
import SnackbarMessage from "../SnackbarMessage";

function ProductCard({ id, discont_price, image, price, title }) {
  const url = `${BASE_URL}${image}`;
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleOpenSnackbar = () => {
    setIsSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  const handleCardClick = () => {
    navigate(`/products/${id}`);
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();
    const cartItem = cartItems.find((item) => item.id === id);
    if (cartItem) {
      dispatch(updateCartItemQuantity({ id, quantity: cartItem.quantity + 1 }));
    } else {
      dispatch(addToCart({ id, title, price, discont_price, image, quantity: 1 }));
    }
    handleOpenSnackbar();
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
        sx={{ height: "100%", position: "relative" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={url}
            alt={title}
            sx={{ height: "35vh", objectFit: "cover" }}
          />
          <CardContent>
            <div className={styles.price_container}>
              <p className={styles.discount_price}>{discont_price ? discont_price : price}$</p>
              {discont_price ? <p className={styles.price}>{price}$</p> : null}
              {discont_price ? (
                <p className={styles.amount_sale}>- {Math.round(100 - (discont_price / price) * 100)} %</p>
              ) : null}
            </div>
            <p className={styles.description}>{title}</p>
          </CardContent>
        </CardActionArea>
        {isHovered && (
          <div className={styles.addToCartContainer}>
            <Button
              variant="contained"
              color="primary"
              style={{ borderRadius: "21px", border: "2px solid #393", background: "#F1FFF1", color: "rgba(51, 153, 51, 1)", height: "8vh", width: "100%" }}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </div>
        )}
      </Card>
      <SnackbarMessage isSnackbarOpen={isSnackbarOpen} handleCloseSnackbar={handleCloseSnackbar}/>
    </>
  );
}

export default ProductCard;





