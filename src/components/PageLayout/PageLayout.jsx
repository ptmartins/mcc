import styles from './PageLayout.module.css';

const PageLayout = ({ title, children }) => {
    return(
        <>
            <header className={styles.header}>
                <h1>{title}</h1>
            </header>
            <main className={styles.main}>
                { children }
            </main>
            <footer className={styles.footer}>
                <div className={styles.date}>{ new Date().toLocaleString() }</div>
                <div className={styles.copyright}> Copyright &copy;2018 Imagen Ltd. </div>
            </footer>
        </>    
    ) 
}

export default PageLayout;