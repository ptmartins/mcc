import { FiLogIn, FiLogOut } from "react-icons/fi";
import styles from './Header.module.css';

const Header = ({ version, user, loggedIn }) => {

    const welcome = loggedIn ? 'Welcome, Admin' : 'Login';

    return(
        <header className={ styles.header }>
            <h1>Media Control Centre <span className={ styles.version }>version 7.1.1.872</span> </h1>

            { loggedIn &&
                <>
                    <span className={styles.welcome}> { welcome } </span> 
                    <a href="/" className={`u-link ${ styles.logout }`} title="Logout" > <FiLogOut /> </a>
                </>
            }
        </header>    
    )
}

export default Header;