import styles from './Input.module.css';

const Input = ({type, placeholder, label, value, onChange, ...rest}) => {
    return(
        <div className={styles.input__container}>
            {label && <label> { label } </label> }
            <input 
                type={ type ?? 'text' } 
                placeholder={ placeholder ? placeholder : ''} 
                className={styles.input} 
                value={ value ?? '' }
                onChange={ onChange }
            />
        </div>
    ) 
}

export default Input;