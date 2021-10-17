import React from 'react';
import { useDarkmodeContext } from '../../context/darkmodeContextProvider';
import styles from './mainFooter.module.scss';

type MainFooterProps = {

}

const MainFooter: React.FC<MainFooterProps> = () => {
  const { darkmode } = useDarkmodeContext();
  return (
    <div className={darkmode ? styles.container_dark : styles.container}>

    </div>
  )
}

export default MainFooter;
