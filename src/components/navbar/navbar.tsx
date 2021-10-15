import React, { useState } from 'react';
import { navbarItems } from './navbarItems';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';
import { FaHamburger, FaReact, FaTimes } from 'react-icons/fa';
import DarkmodeSwitch from '../darkmode/darkmodeSwitch';

const Navbar: React.FC = () => {
  const [navbarToggled, setNavbarToggled] = useState<boolean>(true);

  return (
    <nav className={styles.container}>
      <Link to='/' className={styles.header} >
          <h1>
            Rints.in
            <i><FaReact /></i>
          </h1>
      </Link>
      <div className={styles.menuToggle}>
        <i onClick={() => setNavbarToggled(!navbarToggled)}>
          {
            navbarToggled
            ? <FaHamburger />
            : <FaTimes />
          }
        </i>
      </div>
      <ul className={`${navbarToggled ? styles.hidden : null} ${styles.menu}`}>
        {
          navbarItems.map(item => {
            return (
              <li key={item.key}>
                <Link className={styles[item.cname]} to={item.to}>{item.name}</Link>
              </li>
            )
          })
        }
        <li className={styles.themeSwitch}>
          <DarkmodeSwitch />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
