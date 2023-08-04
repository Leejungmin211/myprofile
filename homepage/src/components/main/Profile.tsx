'use client';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Link from 'next/link';
import MyPicture from '../../../public/images/mypicture.jpg';
import SvgText from '../profile/SvgText';

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
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });
  return (
    <section className="w-full flex flex-col items-center justify-center">
      {isMobile ? (
        <div className="h-16 mb-20">
          <SvgText text="Frontend" />
          <SvgText text="developer" />
        </div>
      ) : (
        <SvgText text="Frontend developer" />
      )}

      <div className="flex justify-center items-center border-white border-opacity-50 border-2 rounded-2xl px-16 py-12 xsm:p-8">
        <div className="flex justify-center items-center xsm:flex-col sm:flex-col md:flex-row">
          <Image
            className="rounded-full object-cover w-60 h-60 sm:w-30 sm:h-30 xsm:w-20 xsm:h-20"
            src={MyPicture}
            alt="jungmin"
          />
          <div className="flex flex-col text-center ml-12 p-2 text-white text-lg font-semibold xsm:ml-4">
            {ABOUT_DATA.map((data, index) => {
              return (
                <Link
                  key={index}
                  href={data.link}
                  target={data.target}
                  className="rounded-3xl border-2 px-6 py-2 m-2 transition duration-0 hover:bg-white hover:bg-opacity-50 hover:text-navy xsm:text-xs hover:duration-500 ease-in-out"
                >
                  {data.text}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
