import React, { useEffect } from 'react';
import Education from '../education/education';
import styles from './cv.module.scss';

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  useEffect(() => {
    document.body.style.overflow = "auto"
  })
  return (
    <div className={styles.container}>
      <Education />
    </div>
  )
}

export default Cv;
