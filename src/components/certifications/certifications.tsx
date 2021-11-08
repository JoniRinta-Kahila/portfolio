import React from 'react';
// import { useDarkmodeContext } from '../context/darkmodeContextProvider';
import styles from './certifications.module.scss';
import CertificationItems from './certificationItems';
import { ReactSmartScroller } from 'react-smart-scroller'
import CertificationItem from './certificationItem';

type CertificatesProps = {

}

const Certifications: React.FC<CertificatesProps> = () => {
  // const { darkmode } = useDarkmodeContext();
  return (
    <section className={styles.container}>
      <div style={{display:'flex', justifyContent:'center', fontSize:'1.5rem', fontFamily:'monospace'}}>
        <h2>Certifications</h2>
      </div>
      <div className={styles.items}>
        <ReactSmartScroller style={{display:'flex', alignItems:'center', justifyContent:'center', overflowX:'auto', overflowY:'hidden'}}>
          {
            CertificationItems.map(x => {
              return <CertificationItem key={x.key} certidicationItem={x} />
            })
          }
        </ReactSmartScroller>
      </div>
    </section>
  )
}

export default Certifications
