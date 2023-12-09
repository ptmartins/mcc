import styles from './KeyValue.module.css';

const KeyValue = ({ label, value }) => {

    return(
        <div className={ styles.keyValue }>
            <div className={ styles.key }> { label } </div>
            <div className={ styles.value }> { value } </div>
        </div>    
    )
}

export default KeyValue;