import styles from "./index.module.css";
import {instagramIcon, whatsappIcon, mapImg} from '../../utils';
import Map from '../Map';

function Footer () {

    return (
        <footer>
            <div className={styles.footer_wrapper}>
                <div className={styles.contacts_wrapper}>
                    <div className={styles.contact_container}>
                        <p className={styles.footer_titel}>Contact</p>
                        <p className={styles.phone_number}>+49 999 999 99 99</p>
                        <div className={styles.links_container}>
                            <div className={styles.link_container}>
                                <a 
                                    href="https://www.instagram.com/" 
                                    target="_blank" 
                                    className={styles.instagram_icon}
                                >
                                        <img src={instagramIcon}/>
                                </a>
                                <p className={styles.link_title}>instagram</p>
                            </div>
                            <div className={styles.link_container}>
                                <a href="https://web.whatsapp.com/" target="_blank"><img src={whatsappIcon}/></a>
                                <p className={styles.link_title}>whatsapp</p>
                            </div>  
                        </div>
                    </div>
                    <div className={styles.address_container}>
                        <p className={styles.footer_titel}>Address</p>
                        <p className={styles.address}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
                        <div className={styles.working_hours_container}>
                            <p className={styles.working_hours}>Working Hours:</p>
                            <p className={styles.text}>24 hours a day</p>
                        </div>
                    </div>
                </div>
                {/* <div ><img src={mapImg} alt="google maps" className={styles.map_image}/></div> */}
                <Map />
            </div>
        </footer>
    )
};

export default Footer;