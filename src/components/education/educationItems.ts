export interface IEducationItem {
  key: number;
  title: string;
  description: string;
  perioid: string;
  school: string
}

const EducationItems: IEducationItem[] = [
  {
    key: 0,
    title: 'Vocational Qualification in Information and Communication Technology',
    description: '',
    perioid: '02/2020 - 8/2021',
    school: 'Vantaa Vocational College, Varia',
  },
  {
    key: 1,
    title: 'Vocational Qualification in Safety and Security',
    description: 'The degree provides basic skills for working in a variety of security positions.',
    perioid: '04/2018 - 02/2020',
    school: 'Vantaa Vocational College, Varia',
  },
]

export default EducationItems;
