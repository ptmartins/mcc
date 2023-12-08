import styles from './PageLayout.module.css';

const PageLayout = ({ title, children }) => {
    return(
        <main className={styles.main}>
            <h2 className={styles.title}> {title} </h2>
            { children }
        </main>
    ) 
}

export default PageLayout;