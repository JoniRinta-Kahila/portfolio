import { IconType } from 'react-icons';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3
} from 'react-icons/si';
import { IoLogoNpm } from 'react-icons/io5';
import { DiSass } from 'react-icons/di';

interface IIconArr {
  key: number;
  icon: IconType;
  color: string;
  size: number;
}

export interface ITechData {
  key: number;
  header: string;
  description: string;
  icons: IIconArr[];
}

export const techData: ITechData[] = [
  {
    key: 0,
    header: 'JavaScript, TypeScript',
    description: 'JavaScript || TypeScript is the programming language I use the most in my projects. I prefer to write with Typescript because the code becomes easier to read.',
    icons: [
      {
        key: 0,
        icon: SiJavascript,
        color: '#EFD81D',
        size: 25,
      },
      {
        key: 1,
        icon: SiTypescript,
        color: '#2F74C0',
        size: 25,
      },
    ],
  },
  {
    key: 1,
    header: 'React, React Native',
    description: 'React, especially functional components with TypeScript are the best. I have several React projects, and this is one of them.',
    icons: [
      {
        key: 0,
        icon: SiReact,
        color: '#61DAFB',
        size: 25,
      },
      {
        key: 1,
        icon: SiReact,
        color: '#173796',
        size: 25,
      },
    ],
  },
  {
    key: 2,
    header: 'Node.js',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aliquid doloremque saepe impedit ratione exercitationem, dignissimos numquam totam nihil delectus?',
    icons: [
      {
        key: 0,
        icon: SiNodedotjs,
        color: '#54B689',
        size: 25,
      },
    ],
  },
  {
    key: 3,
    header: 'NPM',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aliquid doloremque saepe impedit ratione exercitationem, dignissimos numquam totam nihil delectus?',
    icons: [
      {
        key: 0,
        icon: IoLogoNpm,
        color: '#54B689',
        size: 30,
      },
    ],
  },
  {
    key: 4,
    header: 'HTML, CSS',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aliquid doloremque saepe impedit ratione exercitationem, dignissimos numquam totam nihil delectus?',
    icons: [
      {
        key: 0,
        icon: SiHtml5,
        color: '#54B689',
        size: 25,
      },
      {
        key: 1,
        icon: SiCss3,
        color: '#54B689',
        size: 25,
      },
    ],
  },
  {
    key: 5,
    header: 'SASS',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aliquid doloremque saepe impedit ratione exercitationem, dignissimos numquam totam nihil delectus?',
    icons: [
      {
        key: 0,
        icon: DiSass,
        color: '#54B689',
        size: 25,
      },
    ],
  },
];
