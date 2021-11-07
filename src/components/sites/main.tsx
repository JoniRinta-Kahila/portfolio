import React, { useState } from 'react';
import Description from '../description/description';
import WebGLSection from '../webGL/webGLSection';
import styles from './main.module.scss';
import WebTechs from '../technologies/webTechs';
import WebGLAction1 from '../webGLActions/webGLAction1';
import ReactPageScroller from 'rintsin-react-page-scroller';

// https://github.com/markcellus/scroll-js

const Main: React.FC = () => {

  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePageChange = (number: number) => {
    setCurrentPage(number)
  };

  const handleBeforePageChange = (number: number) => {
    console.log(number);
  };

  return (
    <div className={styles.container}>
      <React.Fragment>
          <ReactPageScroller
            pageOnChange={handlePageChange}
            onBeforePageScroll={handleBeforePageChange}
            customPageNumber={currentPage}
          >
            {/* Part 1 */}
            <div>
              <Description />
            </div>

            {/* Part 2 */}
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', height:'calc(100vh - 80px)'}}>
              <div style={{flexGrow:1}}>
                <WebTechs />
              </div>
              {
                currentPage === 1
                  ? <WebGLAction1 />
                  :null
              }
              <div style={{flexGrow:1}}>
                <WebGLSection />
              </div>
            </div>

            {/* Part 3 */}
            <div style={{background:'green'}}>
              <p>kek</p>
            </div>
            <div style={{background:'black'}}>
            <p>lol</p>
            </div>
            <div style={{background:'white'}}>
            <p>omg</p>
            </div>
          </ReactPageScroller>

      </React.Fragment>
    </div>
    // <section className={styles.container}>

    //   {/* part 1 */}
    //   <div style={{height:'100vh'}}>
    //     <Description />
    //   </div>

    //   {/* Part 2 */}
    //   <div style={{height:'100vh'}}>
    //     <WebTechs />
    //     <WebGLAction1 />
    //     <WebGLSection />
    //     <div className={styles.webglActions}>
    //       <i
    //         className={styles.btnCode}
    //         // onClick={handleClick}
    //       >
    //         <RiCodeSSlashLine size={30} color='#fff'/>
    //       </i>
    //       <i
    //         className={styles.btnCode}
    //         // onClick={handleClick}
    //       >
    //         <RiCodeSSlashLine size={30} color='#fff'/>
    //       </i>
    //       <i
    //         className={styles.btnCode}
    //         // onClick={handleClick}
    //       >
    //         <RiCodeSSlashLine size={30} color='#fff'/>
    //       </i>
    //     </div>
    //   </div>
    //   <div style={{height: '2000px'}}>

    //   </div>
    // </section>
  )
}

export default Main;
