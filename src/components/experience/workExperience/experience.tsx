import React from 'react';
import styles from '../experience.module.scss';
import ExperienceItem from './experienceItem';
import ExperienceItems from './experienceItems';

type ExperienceProps = {

}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <section className={styles.container}>
      <div className={styles.group}>
        <div className={styles.header}>
          <h2 className={styles.centerText}>WORK EXPERIENCE</h2>
        </div>
        {
          ExperienceItems.map(x => {
            return (
              <ExperienceItem key={x.key} experienceItem={x} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Experience;
