'use client';
import Link from 'next/link';
import TextAnimation from '../profile/TextAnimation';
import PageCounter from '../profile/PageCounter';
import ShadowButton from '../ui/ShadowButton';

const ABOUT_DATA = [
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

export default function Profile() {
  return (
    <section className="w-4/5 h-full flex gap-20 items-center overflow-hidden xsm:w-3/4">
      <div className="w-full flex flex-col gap-10 font-semibold xsm:gap-5">
        <TextAnimation
          initialValue="FRONTEND DEVELOPER"
          nextText="jungmin PORTFOLIO"
          styleText="-translate-x-20 opacity-0 animate-moveTextAnimate xsm:-translate-x-10 xsm:h-20 xsm:w-3/4"
        />
        <div className="flex gap-4 -translate-x-20 opacity-0 animate-moveContentAnimate xsm:flex-wrap xsm:gap-3 xsm:-translate-x-10">
          {ABOUT_DATA.map((data, index) => {
            return (
              <Link key={index} href={data.link} target={data.target}>
                <ShadowButton text={data.text} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
