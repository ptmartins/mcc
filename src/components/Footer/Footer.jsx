import { useState, useEffect } from 'react';
import styles from './Footer.module.css';

const Footer = () => {

    const [dateTime, setDateTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const interval = setInterval(() => {
          setDateTime(new Date().toLocaleString());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

    return(
        <footer className={styles.footer}>
            <div className={styles.date}>{ dateTime }</div>
            <div className={styles.copyright}> Copyright &copy;2018 Imagen Ltd. </div>
        </footer>
    )
}

export default Footer;