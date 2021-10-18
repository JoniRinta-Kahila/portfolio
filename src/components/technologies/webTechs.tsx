import React from 'react';
import { useDarkmodeContext } from '../context/darkmodeContextProvider';
import TechCard from './techCard';
import { techData } from './techData';
import styles from './webTechs.module.scss';

type WebTechsProps = {

}

const WebTechs: React.FC<WebTechsProps> = () => {
  const { darkmode } = useDarkmodeContext();
  return (
    <div className={darkmode ? styles.container_dark : styles.container}>
      <h1>Knowledge of modern web-technologies.</h1>
      <div className={styles.cards}>
        {
          techData.map(x => {
            return (
              <TechCard data={x} key={x.key} />
            )
          })
        }
      </div>
    </div>
  )
}

export default WebTechs;
