import styles from './NotFound.module.css';

const NotFound = () => {
    return(
        <div className={ styles.notFound }>
            <img src="./images/404.png" alt="" className={ styles.icon }/>
            <h1 className={ styles.title }>No data found</h1>
        </div>
    )
}

export default NotFound;