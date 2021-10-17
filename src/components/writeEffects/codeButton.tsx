import React from 'react';
import { useWebGLMessageContext } from '../context/webGLMessageContextProvider';
import styles from './codeButton.module.scss';

type CodeButtonProps = {

}

const CodeButton: React.FC<CodeButtonProps> = () => {
  const { setMesssage } = useWebGLMessageContext();
  return (
    <div className={styles.container}>
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
      <div className={styles.butt}>
        <button onClick={() => setMesssage('Hire me!')}>Click me</button>
      </div>
      <br/>
    </div>
  )
}

export default CodeButton;
