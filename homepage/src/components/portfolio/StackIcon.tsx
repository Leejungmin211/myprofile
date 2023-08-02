import ReactIcon from '../../../public/images/icon/react.svg';
import AwsIcon from '../../../public/images/icon/aws.svg';
import AxiosIcon from '../../../public/images/icon/axios.svg';
import ContextIcon from '../../../public/images/icon/context.svg';
import JavascriptIcon from '../../../public/images/icon/javascript.svg';
import NetlifyIcon from '../../../public/images/icon/netlify.svg';
import PostcssIcon from '../../../public/images/icon/postcss.svg';
import StyledcomponentsIcon from '../../../public/images/icon/styledcomponents.svg';
import ZustandIcon from '../../../public/images/icon/zustand.svg';
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
};

export default function StackIcon({ name }: { name: string }) {
  const IconComponent = icons[name];
  return (
    <>
      {name && IconComponent ? (
        <Image src={IconComponent} alt={IconComponent} width={20} height={20} />
      ) : null}
    </>
  );
}
