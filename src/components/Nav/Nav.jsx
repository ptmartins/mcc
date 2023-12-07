import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = ({menus}) => {

  return (
    <div className={styles.nav}>
      <div className="logo">
        <img src='/images/logo.png' alt="Imagen logo" title="Imagen" className={styles.logo} />
      </div>
      <ul className={styles.nav_list}>
        {menus.map(menu => {
          return(
            <li className={styles.nav_listItem}>
              <Link to={ menu.path } className={`u-link ${styles.nav_link}`}> { menu.txt } </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Nav;