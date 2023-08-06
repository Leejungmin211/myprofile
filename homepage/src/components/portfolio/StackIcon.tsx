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
  HTML: HtmlIcon,
  CSS: CssIcon,
  TypeScript: TypeScriptIcon,
  'React Query': ReactQueryIcon,
  'Next.js': NextIcon,
};

export default function StackIcon({
  name,
  width,
  height,
}: {
  name: string;
  width: number;
  height: number;
}) {
  const IconComponent = icons[name];
  return (
    <>
      {name && IconComponent ? (
        <Image
          src={IconComponent}
          alt={IconComponent}
          width={width}
          height={height}
        />
      ) : null}
    </>
  );
}
