import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import styles from './Nav.module.css';

const Nav = ({menus}) => {

  return (
    <div className={styles.nav}>
      <div className="logo">
        <img src='/images/logo.png' alt="Imagen logo" title="Imagen" className={styles.logo} />
      </div>
      <div className={styles.menu}>
        {
          Object.keys(menus).map(key => {

            // Capitalize key title
            const title = key.charAt(0).toUpperCase() + key.slice(1);

            return(
              <div key={ key } className={styles.block}>
                <h4 className={styles.menu_title}> { title } </h4>
                <ul>
                  {menus[key].map((item, index) => {
                    return(
                      <li key={ uuid() } className={styles.menu_listItem}>
                        <Link to={ item.path } className={`u-link ${styles.nav_link}`}> 
                          <i className={ styles.icon }> { item.icon } </i>
                          <span className={ styles.txt }> { item.txt } </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Nav;