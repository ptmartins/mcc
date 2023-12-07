import styles from './Card.module.css';

const Card = ({ title, children}) => {
    return(
        <div className={ styles.card }>
            <header className={ styles.header }>
                <h1 className={styles.title}> { title } </h1>
            </header>
            <div className={styles.body}>
                { children }
            </div>
        </div>
    )
}

export default Card;