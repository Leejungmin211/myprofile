import Profile from '../components/main/Profile';
import Skill from '../components/main/Skill';
import Project from '../components/main/Project';
import Contact from '../components/main/Contact';
import ReactIcon from '../../public/images/icon/react.svg';
import AwsIcon from '../../public/images/icon/aws.svg';
import ContextIcon from '../../public/images/icon/context.svg';
import JavascriptIcon from '../../public/images/icon/javascript.svg';
import NetlifyIcon from '../../public/images/icon/netlify.svg';
import PostcssIcon from '../../public/images/icon/postcss.svg';
import StyledcomponentsIcon from '../../public/images/icon/styledcomponents.svg';
import ZustandIcon from '../../public/images/icon/zustand.svg';
import CssIcon from '../../public/images/icon/css.svg';
import HtmlIcon from '../../public/images/icon/html.svg';
import NextIcon from '../../public/images/icon/next.svg';
import ReactQueryIcon from '../../public/images/icon/reactquery.svg';
import TypeScriptIcon from '../../public/images/icon/typescript.svg';
import GithubIcon from '../../public/images/icon/github-mark.svg';
import TailwindcssIcon from '../../public/images/icon/tailwindcss.svg';
import FirebaseIcon from '../../public/images/icon/firebase.svg';
import VercelIcon from '../../public/images/icon/vercel.svg';
import FigmaIcon from '../../public/images/icon/figma.svg';
import VueIcon from '../../public/images/icon/vue.svg';
import NuxtIcon from '../../public/images/icon/nuxt.svg';
import PiniaIcon from '../../public/images/icon/pinia.svg';
import { Icons } from '@/types/portfolio';

export const icons: Icons = {
  React: ReactIcon,
  'AWS(S3)': AwsIcon,
  Context: ContextIcon,
  JavaScript: JavascriptIcon,
  postcss: PostcssIcon,
  'styled-components': StyledcomponentsIcon,
  Zustand: ZustandIcon,
  netlify: NetlifyIcon,
  firebase: FirebaseIcon,
  figma: FigmaIcon,
  HTML: HtmlIcon,
  CSS: CssIcon,
  vercel: VercelIcon,
  TypeScript: TypeScriptIcon,
  'React Query': ReactQueryIcon,
  'Next.js': NextIcon,
  Github: GithubIcon,
  tailwindcss: TailwindcssIcon,
  'Vue.js': VueIcon,
  Nuxt: NuxtIcon,
  Pinia: PiniaIcon,
};

export const ABOUT_DATA = [
  { link: '/#contact', text: 'jungmin.fe@gmail.com', target: '_self' },
  {
    link: 'https://hail-teal-329.notion.site/6bd39f1b9d9f4f11976929634fd7f67e?pvs=4',
    text: 'RESUME',
    target: '_blank',
  },
  {
    link: 'https://github.com/Leejungmin211',
    text: 'GITHUB',
    target: '_blank',
  },
  { link: 'https://velog.io/@jungmin211', text: 'BLOG', target: '_blank' },
];

export const pageArray = [
  { pageNum: 1, component: Profile, name: 'PROFILE' },
  { pageNum: 2, component: Skill, name: 'SKILL' },
  { pageNum: 3, component: Project, name: 'PROJECT' },
  { pageNum: 4, component: Contact, name: 'CONTACT' },
];
