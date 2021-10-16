import React from 'react';
import { useDarkmodeContext } from '../../context/darkmodeContextProvider';
import WebGLSection from '../../webGL/webGLSection';
import styles from './mainFooter.module.scss';

type MainFooterProps = {

}

const MainFooter: React.FC<MainFooterProps> = () => {
  const { darkmode } = useDarkmodeContext();
  return (
    <div className={darkmode ? styles.container_dark : styles.container}>
      <WebGLSection />
    </div>
  )
}

export default MainFooter;
