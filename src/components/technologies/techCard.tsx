import React from 'react';
import styles from './techCard.module.scss';
import { useDarkmodeContext } from '../context/darkmodeContextProvider';
import { ITechData } from './techData';

type TechCardProps = {
  data: ITechData,
}

const TechCard: React.FC<TechCardProps> = ({data}) => {
  const { darkmode } = useDarkmodeContext();
  return (
    <div className={darkmode ? styles.container_dark : styles.container}>
      <div className={styles.icons}>
        {
          data.icons.map(x => {
            return (
              <x.icon key={x.key} color={x.color} size={x.size} enableBackground={'#fff'}/>
            )
          })
        }
      </div>
      <h3>{data.header}</h3>
      <p>
        {data.description}
      </p>
    </div>
  )
}

export default TechCard;
