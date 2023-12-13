import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from './Checkbox.module.css';

const Checkbox = ({label, checked, type,  ...props}) => {

    const id = uuidv4();
    const [isChecked, setIsChecked] = useState(checked);
    const handleChecked = () => setIsChecked(!isChecked);

    return(
        <label className={styles.label} htmlFor={id}>
            <input id={id} type="checkbox" onChange={() => handleChecked()} className={styles.input} checked={isChecked} />
            <span className={styles.checkmark}></span>
            <span className={styles.txt}> {label} </span>
        </label>
    ) 
}

export default Checkbox;