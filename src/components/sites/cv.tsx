import React, { useEffect } from 'react';
import Certifications from '../certifications/certifications';
import Education from '../experience/education/education';
import Experience from '../experience/workExperience/experience';
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
      <Certifications />
      <Experience />
    </div>
  )
}

export default Cv;
