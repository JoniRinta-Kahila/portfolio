import React from 'react';
import styles from '../experience.module.scss';
import EducationItem from './educationItem';
import EducationItems from './educationItems';

const Education: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.group}>
        <div className={styles.header}>
          <h2 className={styles.centerText}>Education</h2>
        </div>
        {
          EducationItems.map(x => {
            return (
              <EducationItem key={x.key} educationItem={x} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Education;
