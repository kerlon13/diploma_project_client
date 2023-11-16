import styles from './index.module.css';
import mainIcon from '../../assets/icons/mainIcon.svg';
import { Badge, Button, ThemeProvider, createTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from 'react-redux';
import { calculateCartCount } from '../../utils';
import { useState } from 'react';

function NavMenu({catalogRef, setIsCatalogClick}) {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

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

    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    
    return (
        <nav>
            <div className={styles.nav_wrapper}>
                <div className={styles.icon_container}>
                    <Link to='/'>
                        <img id="anchor" src={mainIcon} alt='main icon'/>
                    </Link>
                    <Link to='/'>
                    {isSmallScreen ? null : (
                        <Button
                            className={styles.catalog_btn} 
                            style={{background: '#393', borderRadius: '5px', width: "10vw"}} 
                            variant='contained'
                            onClick={scrollToCatalog}
                        >
                            Catalog
                        </Button>
                    )}
                    </Link>
                </div>
                <div className={styles.burger_icon} onClick={toggleMenu}>
                    <MenuIcon sx={{ color: 'grey', fontSize: '2rem' }} />
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
            {isMenuVisible && (
                <div className={styles.mobile_menu}>
                    <Link className={styles.link} to='/'>
                        Main Page
                    </Link>
                    <Link className={styles.link} to='/allProducts'>
                        All products
                    </Link>
                    <Link className={styles.link} to='/allSales'>
                        All sales
                    </Link>
                </div>
            )}
        </nav>
    )
};

export default NavMenu;