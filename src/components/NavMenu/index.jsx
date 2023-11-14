import styles from './index.module.css';
import mainIcon from '../../assets/icons/mainIcon.svg';
import { Badge, Button, ThemeProvider, createTheme } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { calculateCartCount } from '../../utils';

function NavMenu({catalogRef, setIsCatalogClick}) {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart);
    const scrollToCatalog = () => {
        setIsCatalogClick(true);
        navigate('/');
        if (catalogRef.current) {
            catalogRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const theme = createTheme({
        components: {
            MuiBadge: {
                styleOverrides: {
                    badge: {
                        backgroundColor: '#393',
                        color: 'white', 
                    },
                },
            },
        },
    });
    

    return (
        <nav>
            <div className={styles.nav_wrapper}>
                <div className={styles.icon_container}>
                    <Link to='/'>
                        <img id="anchor" src={mainIcon} alt='main icon'/>
                    </Link>
                    <Link to='/'>
                    <Button 
                        style={{background: '#393', borderRadius: '5px'}} 
                        variant='contained'
                        onClick={scrollToCatalog}
                    >
                        Catalog
                    </Button>
                    </Link>
                </div>
                <div className={styles.links_container}>
                    <div className={styles.links_of_pages}>
                        <Link className={styles.link} to='/'>Main Page</Link>
                        <Link className={styles.link} to='/allProducts'>All products</Link>
                        <Link className={styles.link} to='/allSales'>All sales</Link>
                    </div>
                    <div>
                        <Link to='/cart'>
                            <ThemeProvider theme={theme}>
                                <Badge badgeContent={calculateCartCount(cartItems)}>
                                    <ShoppingCartIcon sx={{ color: 'grey', fontSize: '2rem' }} />
                                </Badge>
                            </ThemeProvider>
                        </Link> 
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default NavMenu;