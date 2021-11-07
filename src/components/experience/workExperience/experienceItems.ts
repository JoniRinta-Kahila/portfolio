export interface IExperience {
  key: number;
  title: string;
  company: string;
  description: string;
  period: string;
}

const ExperienceItems: IExperience[] = [
  {
    key: 8,
    title: 'Teacher of programming',
    company: 'City of Vantaa',
    description: '',
    period: '08/2021->'
  },
  {
    key: 7,
    title: 'Teacher of programming and robotics',
    company: 'University of Helsinki',
    description: 'Scratch programming for comprehensive- and high school students',
    period: '01/2021->',
  },
  {
    key: 6,
    title: 'Lead Developer',
    company: 'Self-employed',
    description: 'Educational mobile game for Luma-Center. The purpose of the game is to encourage children and young students in natural sciences.',
    period: '04/2020->'
  },
  {
    key: 5,
    title: 'Entrepreneur',
    company: 'Apusi',
    description: 'Moving and relocation services',
    period: '11/2014->',
  },
  {
    key: 4,
    title: 'Jailer',
    company: 'Rikosseuraamuslaitos',
    description: 'Temporary official',
    period: '05/2019- 11/2019',
  },
  {
    key: 3,
    title: 'Security officer',
    company: 'Palmia Oy',
    description: 'Security officer at Helsinki city public transportation.',
    period: '11/2015 - 03/2019',
  },
  {
    key: 2,
    title: 'Security officer',
    company: 'Securitas Oy',
    description: 'Security officer at Helsinki city public transportation.',
    period: '08/2011 - 10/2015',
  },
  {
    key: 1,
    title: 'Telemarketer',
    company: 'Aller Julkaisut Oy',
    description: 'Telemarketer',
    period: '05/2010 - 07/2010',
  },
  {
    key: 0,
    title: 'Telemarketer',
    company: 'Enia Oy',
    description: 'Subscription seller and advisor',
    period: '11/2009 - 04/2010',
  },
]

export default ExperienceItems;
