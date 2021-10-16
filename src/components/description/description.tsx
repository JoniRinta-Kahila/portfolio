import React from 'react';
import styles from './description.module.scss';
import avatar from '../../media/img/avatar.png';
import { useDarkmodeContext } from '../context/darkmodeContextProvider';

type DescriptionProps = {

}

const Description: React.FC<DescriptionProps> = () => {
  const { darkmode } = useDarkmodeContext()
  return (
    <section className={darkmode ? styles.container_dark : styles.container}>
      <img src={avatar} alt='avatar' />
      <div>
        <p>
          <sup>Hello, Welcome to my portfolio page.</sup>
          <br/>
          I am <b>Joni Rinta-Kahila</b>. I'm programming teacher at Vantaa.
          <br/>
          Here you will find my CV and some of my projects.
        </p>
        <hr />
      </div>
    </section>
  )
}

export default Description;
