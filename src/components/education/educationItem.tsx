import React from 'react';
import styles from './educationItem.module.scss'
import { IEducationItem } from './educationItems';

type EducationItemProps = {
  educationItem: IEducationItem,
}

const EducationItem: React.FC<EducationItemProps> = ({ educationItem: x }) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <h3><strong>{ x.title }</strong></h3>
          <h4 className={styles.educator}>{ x.school }</h4>
        </div>
        <div className={styles.period}>
          <span>{ x.perioid }</span>
        </div>
        <p className={styles.textMuted}>{ x.description }</p>
      </div>
    </div>
  )
}

export default EducationItem
