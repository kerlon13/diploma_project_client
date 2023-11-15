import discountImg from './assets/images/discountImg.svg';
import instagramIcon from './assets/icons/instagram.svg';
import whatsappIcon from './assets/icons/whatsapp.svg';
import mapImg from './assets/images/map.svg';
import notAPageImg from './assets/images/error404.svg';
import plusIcon from './assets/icons/plusIcon.svg';
import minusIcon from './assets/icons/minusIcon.svg';
import closeIcon from './assets/icons/closeIcon.svg';
import { setMinPrice, setMaxPrice } from './core/redux/store/slices/productsSlice';
import { useDispatch } from 'react-redux';

export {instagramIcon, whatsappIcon, mapImg, minusIcon, plusIcon, closeIcon};
export const BASE_URL = "http://localhost:3333";
export default discountImg;
export {notAPageImg};

export const sortProducts = (products, sortOption) => {
    let sortedProducts = [...products];
  
    switch (sortOption) {
      case 'priceAsc':
        sortedProducts.sort((a, b) => {
          const priceFirst = a.discont_price || a.price; 
          const priceSecond = b.discont_price || b.price; 
          return priceFirst - priceSecond;
        });        
        break;
      case 'priceDesc':
        sortedProducts.sort((a, b) => {
          const priceFirst = a.discont_price || a.price; 
          const priceSecond = b.discont_price || b.price; 
          return priceSecond - priceFirst;
        });
        break;
      case 'titleAsc':
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'titleDesc':
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
    }
  
    return sortedProducts;
};

export function calculateOrderTotal(items) {
  const total = items.reduce((acc, item) => {
    const price = item.discont_price || item.price;
    const itemTotal = price * item.quantity;
    return acc + itemTotal;
  }, 0);

  return parseFloat(total.toFixed(2));
}

export const calculateCartCount = (cartItems) => {
  if (!cartItems || cartItems.length === 0) {
      return 0;
  }
  return cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);
};

export const address = "Linkstraße 2, 8 OG, 10785, Berlin, Deutschland";


  