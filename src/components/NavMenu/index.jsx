import styles from './index.module.css';
import mainIcon from '../../UI/icons/mainIcon.svg';
import cartImg from '../../UI/icons/shoppingBag.svg';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NavMenu() {

    return (
        <nav>
            <div className={styles.nav_wrapper}>
                <div className={styles.icon_container}>
                    <img src={mainIcon} alt='main icon'/>
                    <Button style={{background: '#393', borderRadius: '5px'}} variant='contained' >Catalog</Button>
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