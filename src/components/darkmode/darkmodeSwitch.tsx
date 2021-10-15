import React from 'react';
import { useDarkmodeContext } from '../context/darkmodeContextProvider';
import styles from './darkmodeSwitch.module.scss';
import { BsMoonStars, BsSun } from 'react-icons/bs'

const DarkmodeSwitch: React.FC = () => {
  const { darkmode, setDarkmode } = useDarkmodeContext();
  return (
    <div className={styles.toggleDarkmode}>
      <input type='checkbox' checked={darkmode} className={styles.checkbox} id='chk' onChange={(event) => setDarkmode(event.target.checked)} />
      <label className={styles.label} htmlFor='chk'>
        <i className={styles.moon}><BsMoonStars /></i>
        <i className={styles.sun}><BsSun /></i>
        <div className={styles.ball}></div>
      </label>
    </div>
  )
}

export default DarkmodeSwitch;
