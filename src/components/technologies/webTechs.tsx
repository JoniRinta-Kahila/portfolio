import React from 'react';
import { useDarkmodeContext } from '../context/darkmodeContextProvider';
import TechCard from './techCard';
import { techData } from './techData';
import styles from './webTechs.module.scss';
import { ReactSmartScroller } from 'react-smart-scroller'

type WebTechsProps = {

}

const WebTechs: React.FC<WebTechsProps> = () => {
  const { darkmode } = useDarkmodeContext();
  return (
    <div className={!darkmode ? styles.container : styles.container_dark}>
      <h1 className={styles.header}>Knowledge of modern web-technologies.</h1>
      <ReactSmartScroller
        draggable
        style={{display:'flex', alignItems:'center', justifyContent:'center', overflowX:'auto', overflowY:'hidden', height:'240px'}}
        >
        {
          techData.map(x => {
            return (
              <TechCard data={x} key={x.key} />
              )
            })
          }
      </ReactSmartScroller>
    </div>
  )
}

export default WebTechs;
