import { NavLink, useLocation } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import styles from './Nav.module.css';

const Nav = ({ menus }) => {

  const location = useLocation();

  return (
    <div className={ styles.nav }>
      <div className="logo" >
        <img src='/images/logo.png' alt="Imagen logo" title="Imagen" className={styles.logo} />
      </div>
      <div className={ styles.menu }>
        {
          Object.keys(menus).map(key => {

            // Capitalize key title
            const title = key.charAt(0).toUpperCase() + key.slice(1);

            return(
              <div key={ key } className={ styles.block }>
                <h4 className={ styles.menu_title }> { title } </h4>
                <div>
                  {menus[key].map((item, index) => {
                    return(
                        <NavLink 
                          key={ index }
                          to={ item.path } 
                          className = {({ isActive }) =>
                            isActive ? `u-link active ${ styles.nav_link } ${ styles.active }` : `u-link ${ styles.nav_link }`
                          }
                        > 
                          <i className={ styles.icon }> { item.icon } </i>
                          <span className={ styles.txt }> { item.txt } </span>
                        </NavLink>
                    )
                  })}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Nav;