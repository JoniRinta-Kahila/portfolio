import React, { useEffect, useRef, useState } from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';
import { useDarkmodeContext } from '../context/darkmodeContextProvider';
import { useScrollPositionContext } from '../context/scrollPositionContextProvider';
import { useWebGLMessageContext } from '../context/webGLMessageContextProvider';
import styles from './webGLSection.module.scss';

const unityContent =
  new UnityContent('unity/Build/unity.json', 'unity/Build/UnityLoader.js');

const WebGLSection: React.FC = () => {
  const { darkmode } = useDarkmodeContext();
  const { message, setMesssage } = useWebGLMessageContext();
  const [loaded, setLoaded] = useState<boolean>(false);
  const { scrollY } = useScrollPositionContext();
  const webglRef: React.MutableRefObject<any> = useRef(null);

  useEffect(() => { // handle scrolling over webGL.
    const handleScroll = (event: WheelEvent) => {
      if (webglRef.current && !webglRef.current.contains(event.target))
        return;

      if (event.deltaY > 0) {
        window.scrollTo({top: scrollY + 100});
      }
      if (event.deltaY < 0) {
        window.scrollTo({top: scrollY - 100});
      }
    }
    window.addEventListener('wheel', handleScroll, true)
    return () => window.removeEventListener('wheel', handleScroll, true);
  }, [scrollY]);

  useEffect(() => { // handle webGL on message.
    console.info(message)
    if (!message) return;
    
    unityContent.send(
      'JavaScriptHook',
      'PlayText',
      message,
    );

    // reset message for replay same message again.
    setTimeout(() => {
      setMesssage('')
    }, 2000)
  }, [message, setMesssage]);

  useEffect(() => { // handle webGL theme switch.
    if (loaded) return;
    unityContent.send(
      'JavaScriptHook',
      'UseDarkmode',
      darkmode
        ? 1
        : 0,
    );
  }, [darkmode, loaded]);

  if (loaded) {
    unityContent.on('loaded', () => {
      unityContent.send(
        'JavaScriptHook',
        'UseDarkmode',
        darkmode
          ? 1
          : 0,
      );
    });
    setLoaded(true);
  }

  return (
    <div ref={webglRef} className={styles.container}>
      <Unity unityContent={unityContent} />
    </div>
  )
}

export default WebGLSection;
