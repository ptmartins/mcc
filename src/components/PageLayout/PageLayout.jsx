import styles from './PageLayout.module.css';

const PageLayout = ({ title, children }) => {
    return(

        <>
            <h2 className={styles.title}> {title} </h2>
            { children }
        </>

    ) 
}

export default PageLayout;