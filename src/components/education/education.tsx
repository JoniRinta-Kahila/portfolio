import React from 'react';
import styles from './education.module.scss';
import EducationItem from './educationItem';
import EducationItems from './educationItems';

const Education: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.eduGroup}>
        <div className={styles.header}>
          <h2 className={styles.centerText}>Education</h2>
        </div>
        {/* <div> */}
          {
            EducationItems.map(x => {
              return (
                <EducationItem educationItem={x} />
              )
            })
          }
        {/* </div> */}
      </div>
    </section>
  )
}

export default Education;
