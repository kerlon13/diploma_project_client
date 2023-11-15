import { Alert, Button, Card, CardActionArea, CardContent, CardMedia, Snackbar, ThemeProvider, createTheme } from "@mui/material";
import { BASE_URL } from "../../utils";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCartItemQuantity } from "../../core/redux/store/slices/cartSlice";

function ProductCard({ id, discont_price, image, price, title }) {
  const url = `${BASE_URL}${image}`;
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const navigate = useNavigate(); 

  const theme = createTheme({
    components: {
      MuiCardMedia: {
        styleOverrides: {
          root: {
            height: '35vh',
            objectFit: 'cover',
          },
        },
      },
    },
  });

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
    <div>
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
        sx={{ height: "100%", position: "relative" }}
      >
        <CardActionArea>
          <ThemeProvider theme={theme}>
          <CardMedia
            component="img"
            image={url}
            alt={title}
            //style={{ width: "100%", height: "40vh", objectFit: "cover" }}
          />
          </ThemeProvider>
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
          <div className={styles.addToCartContainer} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ borderRadius: "21px", border: "2px solid #393", background: "#F1FFF1", color: "rgba(51, 153, 51, 1)", height:"8vh", width:"15vw" }}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </div>
        )}
      </Card>
      <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={isSnackbarOpen}
          autoHideDuration={2000} 
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '25vw' }}>
            Product added to cart!
          </Alert>
      </Snackbar>
    </div>
  );
}

export default ProductCard;





