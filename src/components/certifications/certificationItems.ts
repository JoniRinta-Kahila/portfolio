export interface ICertificationItem {
  key: number;
  title: string;
  issuer: string;
  url: string;
  externalImg: string;
  internalImg: string;
  provider: string;
  providerLogo: string;
  providerLogoWidth: string;
}

const CertificationItems: ICertificationItem[] = [
  {
    key: 1,
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    url: 'https://www.youracclaim.com/badges/a9352d90-6cb9-41c8-8ea3-9170093b55f2/embedded',
    externalImg:'https://images.youracclaim.com/size/340x340/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png',
    internalImg: '',
    // If provider logo exists, Certificate shows 'provided by {logo}'. Otherwise, 'provided by {provider}
    provider: 'cclaim',
    providerLogo: 'https://cdn.youracclaim.com/assets/embed/acclaim-4574247db5852ba31840afbf6bf296e6eb9ea290b8c2e54c147814344ca2e58f.png',
    providerLogoWidth: '35',

  },
  {
    key: 0,
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco',
    url: 'https://www.youracclaim.com/badges/a100876c-e886-4c85-8502-f7dfe5e039bc/embedded',
    externalImg:'https://images.youracclaim.com/size/340x340/images/054913b2-e271-49a2-a1a4-9bf1c1f9a404/CyberEssentials.png',
    internalImg: '',
    // If provider logo exists, Certificate shows 'issued by {logo}'. Otherwise, 'issued by {provider}
    provider: 'cclaim',
    providerLogo: 'https://cdn.youracclaim.com/assets/embed/acclaim-4574247db5852ba31840afbf6bf296e6eb9ea290b8c2e54c147814344ca2e58f.png',
    providerLogoWidth: '35',
  }
]

export default CertificationItems;
