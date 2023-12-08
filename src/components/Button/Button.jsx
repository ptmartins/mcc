import styles from './Button.module.css';

const Button = (props) => {

    let btnClasses = styles.btn;

    if(props.variant === 'outlined') {
        btnClasses += ` ${styles.btn__outlined}`;
    }

    switch(props.type) {
        case 'primary':
            btnClasses += ` ${styles.btn__primary}`;
            break;
        case 'danger':
            btnClasses += ` ${styles.btn__danger}`;
            break;
        case 'success':
            btnClasses += ` ${styles.btn__success}`;
            break;
        case 'warning':
            btnClasses += ` ${styles.btn__warning}`;
            break;
        default: 
            btnClasses += '';
            break;
    }

    if(props.state === 'disabled') {
        btnClasses += ` ${styles.btn__disabled}`;
    }

    return(
        <button {...props} className={btnClasses}> {props.children} </button>
    )
}

export default Button;