import React, { useEffect, useRef, useState } from 'react';
import { navbarItems } from './navbarItems';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';
import { FaHamburger, FaReact, FaTimes } from 'react-icons/fa';
import DarkmodeSwitch from '../darkmode/darkmodeSwitch';

const Navbar: React.FC = () => {
  const [navbarToggled, setNavbarToggled] = useState<boolean>(true);
  const ref: React.MutableRefObject<any> = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setNavbarToggled(true);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  })

  return (
    <nav ref={ref} className={styles.container}>
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
