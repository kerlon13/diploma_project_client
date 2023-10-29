import styles from './index.module.css';
import mainIcon from '../../assets/icons/mainIcon.svg';
import cartImg from '../../assets/icons/shoppingBag.svg';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function NavMenu({catalogRef, location}) {
    const navigate = useNavigate();
   
    const scrollToCatalog = () => {
        navigate('/');
        if (catalogRef.current) {
            catalogRef.current.scrollIntoView({ behavior: 'smooth' });
          }
    };

    return (
        <nav>
            <div className={styles.nav_wrapper}>
                <div className={styles.icon_container}>
                    <img id="anchor" src={mainIcon} alt='main icon'/>
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
                        <Link to='/cart'><img src={cartImg} alt='cart image'/></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default NavMenu;