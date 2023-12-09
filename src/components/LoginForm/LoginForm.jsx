import { useState } from 'react';
import { Button, Input } from '../';
import styles from './LoginForm.module.css';

const LoginForm = ({ cb }) => {

    const [userName, setUserName] = useState('');
    const [pwd, setPwd] = useState('');

    const handleSubmit = () => {
        if(userName === 'admin' && pwd === 'password') {
            cb(true);
        } else {
            alert('Inavlid username or password!');
        }
    }

    return(
        <div className={styles.login__overlay}>
            <div className={ styles.login__wrapper }>
                <div className={ styles.login__panel }>
                    <img src="/images/logo.png" alt="" />
                    <h2 className={ styles.login__title }>MediaControlCentre</h2>
                </div>
                <form className={ styles.login__form }>
                    <Input 
                        type="text" 
                        label="User Name" 
                        placeholder="Type username"
                        value={ userName } 
                        onChange={ ev => {
                            setUserName(ev.target.value);
                        }}
                    />
                    <Input 
                        type="password" 
                        label="Password" 
                        placeholder="Type password"
                        value={ pwd } 
                        onChange={ ev => {
                            setPwd(ev.target.value);
                        }} 
                    />
                    <Button type="submit" onClick={ () => handleSubmit() }> Login </Button>
                </form>
            </div>
        </div> 
    )
}

export default LoginForm; 