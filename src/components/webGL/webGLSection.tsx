import React, { useEffect, useState } from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';
import { useDarkmodeContext } from '../context/darkmodeContextProvider';
import { useWebGLMessageContext } from '../context/webGLMessageContextProvider';
import styles from './webGLSection.module.scss';

const unityContent =
  new UnityContent('unity/Build/unity.json', 'unity/Build/UnityLoader.js');

const WebGLSection: React.FC = () => {
  const { darkmode } = useDarkmodeContext();
  const { message } = useWebGLMessageContext();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => { // handle webGL on message
    console.info(message)
    if (!message) return;
    unityContent.send(
      'JavaScriptHook',
      'PlayText',
      message,
    );
  }, [message]);

  useEffect(() => { // handle webGL theme switch
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
    <div className={styles.container}>
      <Unity unityContent={unityContent} />
    </div>
  )
}

export default WebGLSection;
