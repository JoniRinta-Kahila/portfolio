import React, { useRef, useState } from 'react';
import Description from '../description/description';
import WebGLSection from '../webGL/webGLSection';
import { RiCodeSSlashLine } from 'react-icons/ri';
import styles from './main.module.scss';
import WebTechs from '../technologies/webTechs';
import WebGLAction1 from '../webGLActions/webGLAction1';

type MainProps = {

}

const scrollToRef = (ref:any) => window.scrollTo(0, ref.current.offsetTop - 40)
enum action {
  WebGLAction1 = 0,
}
const Main: React.FC<MainProps> = () => {
  const [displayAction, setDisplayAction] = useState<action|null>(null);

  const editorRef:React.MutableRefObject<any> = useRef(null);
  const executeScroll = () => scrollToRef(editorRef)

  const handleClick = () => {
    // setDisplayEditor(true);
    // executeScroll();
  }
  return (
    <section className={styles.container}>
      <Description />
      <WebTechs />
      <WebGLAction1 />
      <WebGLSection />
      <div className={styles.webglActions}>
        <i
          className={styles.btnCode}
          onClick={handleClick}
        >
          <RiCodeSSlashLine size={30} color='#fff'/>
        </i>
        <i
          className={styles.btnCode}
          onClick={handleClick}
        >
          <RiCodeSSlashLine size={30} color='#fff'/>
        </i>
        <i
          className={styles.btnCode}
          onClick={handleClick}
        >
          <RiCodeSSlashLine size={30} color='#fff'/>
        </i>
      </div>
      <div style={{height: '2000px'}}>

      </div>
    </section>
  )
}

export default Main;
