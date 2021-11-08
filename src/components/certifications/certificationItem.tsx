import React from 'react';
import { ICertificationItem } from './certificationItems';
import styles from './certifications.module.scss';

type CertificationItemProps = {
  certidicationItem: ICertificationItem,
}

const CertificationItem: React.FC<CertificationItemProps> = ({ certidicationItem: x }) => {
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
}

export default CertificationItem;
