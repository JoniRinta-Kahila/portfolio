import React from 'react';
import { IExperience } from './experienceItems';
import styles from '../experienceItem.module.scss';

type ExperienceItemProps = {
  experienceItem: IExperience
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experienceItem: x }) => {
  return (
    <div key={x.key} className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <h3><strong>{ x.title }</strong></h3>
          <h4 style={{ backgroundColor: '#0ea0ff' }} className={styles.company}>{ x.company }</h4>
        </div>
        <div className={styles.period}>
          <span>{ x.period }</span>
        </div>
        <p className={styles.textMuted}>{ x.description }</p>
      </div>
    </div>
  )
}

export default ExperienceItem;
