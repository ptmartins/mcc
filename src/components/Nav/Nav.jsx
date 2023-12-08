import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import styles from './Nav.module.css';

const Nav = ({menus}) => {

  return (
    <div className={styles.nav}>
      <div className="logo">
        <img src='/images/logo.png' alt="Imagen logo" title="Imagen" className={styles.logo} />
      </div>
      {
        Object.keys(menus).map(key => {
          return(
            <div key={ key } className="">
              <h4> { key } </h4>
              <ul>
                {menus[key].map((item, index) => {
                  return(
                    <li key={ uuid() }>
                      <Link to={ item.path } className={`u-link ${styles.nav_link}`}> { item.txt } </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })
      }

    </div>
  );
};

export default Nav;