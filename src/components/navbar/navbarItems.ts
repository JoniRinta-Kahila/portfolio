
interface INavbarItem {
  key: number;
  name: string;
  to: string;
  cname: string;
}

export const navbarItems: INavbarItem[] = [
  {
    key: 1,
    name: 'Home',
    to: '/',
    cname: 'linkBasic'
  },
  {
    key: 2,
    name: 'Blog',
    to: '/blog',
    cname: 'linkBasic'
  },
  {
    key: 3,
    name: 'Projects',
    to: '/projects',
    cname: 'linkBasic'
  },
  {
    key: 4,
    name: 'CV',
    to: '/cv',
    cname: 'linkBasic'
  },
]
