import styles from './Footer.module.css';

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.date}>{ new Date().toLocaleString() }</div>
            <div className={styles.copyright}> Copyright &copy;2018 Imagen Ltd. </div>
        </footer>
    )
}

export default Footer;