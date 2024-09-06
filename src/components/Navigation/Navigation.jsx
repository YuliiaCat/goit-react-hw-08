import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css';
import classNames from "classnames";

const getLinkStyle = ({ isActive }) => 
  classNames(styles.link, {
    [styles.isActive]: isActive
  });

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={getLinkStyle}>
        Home
      </NavLink>
      <div>
      <NavLink to="/register" className={getLinkStyle}>
        Register
      </NavLink>
      <NavLink to="/login" className={getLinkStyle}>
        Log in
      </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;