import ReactIcon from '../../../public/images/icon/react.svg';
import AwsIcon from '../../../public/images/icon/aws.svg';
import AxiosIcon from '../../../public/images/icon/axios.svg';
import ContextIcon from '../../../public/images/icon/context.svg';
import JavascriptIcon from '../../../public/images/icon/javascript.svg';
import NetlifyIcon from '../../../public/images/icon/netlify.svg';
import PostcssIcon from '../../../public/images/icon/postcss.svg';
import StyledcomponentsIcon from '../../../public/images/icon/styledcomponents.svg';
import ZustandIcon from '../../../public/images/icon/zustand.svg';
import CssIcon from '../../../public/images/icon/css.svg';
import HtmlIcon from '../../../public/images/icon/html.svg';
import NextIcon from '../../../public/images/icon/next.svg';
import ReactQueryIcon from '../../../public/images/icon/reactquery.svg';
import TypeScriptIcon from '../../../public/images/icon/typescript.svg';
import GithubIcon from '../../../public/images/icon/github-mark.svg';
import TailwindcssIcon from '../../../public/images/icon/tailwindcss.svg';
import FirebaseIcon from '../../../public/images/icon/firebase.svg';
import VercelIcon from '../../../public/images/icon/vercel.svg';
import Image from 'next/image';

interface Icons {
  [key: string]: string;
}

const icons: Icons = {
  React: ReactIcon,
  axois: AxiosIcon,
  'AWS(S3)': AwsIcon,
  Context: ContextIcon,
  JavaScript: JavascriptIcon,
  postcss: PostcssIcon,
  'styled-components': StyledcomponentsIcon,
  Zustand: ZustandIcon,
  netlify: NetlifyIcon,
  firebase: FirebaseIcon,
  HTML: HtmlIcon,
  CSS: CssIcon,
  vercel: VercelIcon,
  TypeScript: TypeScriptIcon,
  'React Query': ReactQueryIcon,
  'Next.js': NextIcon,
  Github: GithubIcon,
  tailwindcss: TailwindcssIcon,
};

export default function StackIcon({
  name,
  width,
  height,
  onClick,
}: {
  name: string;
  width: number;
  height: number;
  onClick?: () => void;
}) {
  const IconComponent = icons[name];
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <>
      {name && IconComponent ? (
        <div className="relative inline-block group">
          <div className="hidden text-sm absolute top-0 -translate-y-10 left-1/2 -translate-x-1/2 my-2 bg-pink px-2 py-1 rounded-md text-white overflow-hidden group-hover:inline-block">
            <div className="truncate">{name}</div>
          </div>
          <Image
            src={IconComponent}
            alt={IconComponent}
            width={width}
            height={height}
            onClick={handleClick}
            className="cursor-pointer hover:scale-110 hover:transition duration-300"
          />
        </div>
      ) : null}
    </>
  );
}
