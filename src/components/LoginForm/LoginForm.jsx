import { useState } from 'react';
import { Button, Input } from '../';
import styles from './LoginForm.module.css';

const LoginForm = () => {

    const [userName, setUserName] = useState('');
    const [pwd, setPwd] = useState('');

    return(
        <div className={styles.login__overlay}>
            <form className={styles.login__form}>
                <Input type="txt" />
                <Button type="submit"> Submit </Button>
            </form>
        </div> 
    )
}

export default LoginForm; 