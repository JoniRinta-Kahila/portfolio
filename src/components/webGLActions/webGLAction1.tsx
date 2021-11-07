import React from 'react';
import { useDarkmodeContext } from '../context/darkmodeContextProvider';
import { useWebGLMessageContext } from '../context/webGLMessageContextProvider';
import styles from './webGLAction1.module.scss';
import { Bounce } from "react-activity";
import "react-activity/dist/Bounce.css";

type WebGLAction1Props = {

}

const WebGLAction1: React.FC<WebGLAction1Props> = () => {
  const { darkmode } = useDarkmodeContext();
  const { setMesssage } = useWebGLMessageContext();

  const handleClick = () => {
    setMesssage('Hire me!');
  }

  return (
    <div className={darkmode ? styles.container_dark : styles.container}>
      <div className={styles.editor}>
        <text className={styles.writer}>
          {'const createButton: React.FC = () => {'}<br/>
          &nbsp;&nbsp;{'return ('}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'<button onClick={() => printMessage()}>'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'Click me'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'</button>'}<br/>
          &nbsp;&nbsp;{');'}<br/>
          {'};'}
        </text>
      </div>
      <div className={styles.program}>
        <div className={styles.activityIndicator}>
          <Bounce color='blue' />
        </div>
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>
  )
}

export default WebGLAction1
