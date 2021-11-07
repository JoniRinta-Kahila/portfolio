import React from 'react';
import { useDarkmodeContext } from '../context/darkmodeContextProvider';
import styles from './certifications.module.scss';
import CertificationItems from './certificationItems';

type CertificatesProps = {

}

const Certifications: React.FC<CertificatesProps> = () => {
  const { darkmode } = useDarkmodeContext();
  return (
    <section className={styles.container}>
      <div style={{display:'flex', justifyContent:'center', fontSize:'1.5rem', fontFamily:'monospace'}}>
        <h2>Certifications</h2>
      </div>
      <div className={styles.items}>
        {
          CertificationItems.map(x => {
            return (
              <div className={styles.item}>
                <a
                  className={styles.badgeLink}
                  target='_blank'
                  rel='noreferrer'
                  href={x.url}
                >
                  <div className={styles.showcase}>
                    <img 
                      src={
                        x.internalImg
                        ? x.internalImg
                        : x.externalImg
                      }
                      alt='badge'
                      width='115'
                      height='115'
                    />
                    <span className={styles.badgeName}>{ x.title }</span>
                    <div className={styles.badgeIssuer}>Issuer:&nbsp; { x.issuer }</div>
                    <div className={styles.badgeProvider}>
                      <p>
                        Provided by&nbsp;
                        {
                          // If provider logo exists, Certificate shows 'provided by {logo}'. Otherwise, 'provided by {provider}
                          x.providerLogo
                          ? <img 
                              src={x.providerLogo} 
                              alt={x.provider}
                              width={x.providerLogoWidth}
                            />
                          : x.provider
                        }
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            )
          })
        }

      </div>
    </section>
    // <section className={styles['section'] + ' portfolio-block cv'}>
    //   <div className={styles.container}>
    //     <div className={styles.group}>
    //       <div className={darkmode ? styles['heading__dark'] : styles['heading__light']}>
    //         <h2 className='text-center'>Certifications</h2>
    //       </div>
    //       <div className='row justify-content-center'>

    //         {
    //           CertificationItems.map((cert) => {
    //             return (
    //               <div key={cert.title} className={styles.col}>
    //                 <a 
    //                 className={styles['badge-link']}
    //                 target='_blank' 
    //                 rel='noreferrer' 
    //                 href={cert.url}
    //               >
    //                 <div className={styles[darkmode ? 'showcase__dark': 'showcase__light']}>
    //                   <img 
    //                   src={cert.internalImg ? cert.internalImg : cert.externalImg} 
    //                   alt='badge'
    //                   width='105'
    //                   height='105'
    //                   />
    //                   <span className={darkmode ? styles['badge-name__dark'] : styles['badge-name__light']}>{cert.title}</span>
    //                   <div className={styles['badge-issuer']}>
    //                     Issuer:&nbsp;
    //                     {cert.issuer}
    //                   </div>
    //                   <div className={'row ' + [darkmode ? styles['badge-provider__dark'] : styles['badge-provider__light']]}>
    //                     <p>
    //                       Provided by&nbsp;
    //                       {
    //                         // If provider logo exists, Certificate shows 'provided by {logo}'. Otherwise, 'provided by {provider}
    //                         cert.providerLogo ?
    //                         <img 
    //                           src={cert.providerLogo} 
    //                           alt={cert.provider}
    //                           width={cert.providerLogoWidth}
    //                         /> :
    //                         cert.provider
    //                       }
    //                     </p>
    //                   </div>
    //                 </div>
    //               </a>
    //               </div>
    //             )
    //           })
    //         }

    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

export default Certifications
