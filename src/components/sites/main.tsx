import React, { useRef, useState } from 'react';
import Description from '../description/description';
import WebGLSection from '../webGL/webGLSection';
import CodeButton from '../writeEffects/codeButton';
import { RiCodeSSlashLine } from 'react-icons/ri';

type MainProps = {

}

const scrollToRef = (ref:any) => window.scrollTo(0, ref.current.offsetTop - 40)

const Main: React.FC<MainProps> = () => {
  const [displayEditor, setDisplayEditor] = useState<boolean>(false);

  const editorRef:React.MutableRefObject<any> = useRef(null);
  const executeScroll = () => scrollToRef(editorRef)

  const handleClick = () => {
    setDisplayEditor(true);
    executeScroll()
  }
  return (
    <section>
      <Description />
      <div>
        {
          displayEditor
            ? <div><CodeButton /></div>
            : <div ref={editorRef} style={{display: 'flex', alignItems:'center', justifyContent: 'center', margin: '15px'}}>
                <i 
                  onClick={handleClick}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '60px',
                    height: '40px',
                    borderRadius: '30px/20px',
                    background: 'linear-gradient(90deg, rgba(119,111,255,1) 0%, rgba(151,88,152,1) 49%, rgba(99,255,0,1) 100%)',
                    border: '1px solid green',
                    cursor: 'pointer'
                  }}
                >
                    <RiCodeSSlashLine size={30} color='#fff'/>
                </i>
              </div>
        }
      </div>
      <WebGLSection />
      {/* <div style={{height: '2000px'}}>

      </div> */}
    </section>
  )
}

export default Main;
