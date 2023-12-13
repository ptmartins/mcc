import {useState} from 'react';
import styles from './RadioBtn.module.css';

const RadioBtn = ({label, checked, name,  ...props}) => {

    const [isChecked, setIsChecked] = useState(checked);
    const handleChecked = () => setIsChecked(!isChecked);

    return(
        <label className={styles.label} >
            <input name={name} type="radio" onChange={() => handleChecked()} className={styles.input} checked={isChecked} />
            <span className={styles.checkmark}></span>
            <span className={styles.txt}> {label} </span>
        </label>
    ) 
}

export default RadioBtn;