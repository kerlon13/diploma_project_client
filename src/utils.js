import discountImg from './assets/images/discountImg.svg';
import instagramIcon from './assets/icons/instagram.svg';
import whatsappIcon from './assets/icons/whatsapp.svg';
import mapImg from './assets/images/map.svg';
import notAPageImg from './assets/images/error404.svg';

export {instagramIcon, whatsappIcon, mapImg};
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

  