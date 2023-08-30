'use client';
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
  return (
    <section className="w-full flex items-center justify-center xsm:flex-col md:flex-col lg:flex-row">
      <div className="w-1/2 xsm:h-14 xsm:mb-20 xsm:mt-10 xsm:w-full md:h-20 md:mb-24 lg:h-full lg:m-0">
        <SvgText text="Front-end" />
        <SvgText text="developer" />
      </div>
      <div className="flex justify-center items-center border-white border-opacity-50 border rounded-xl shadow-white/80 shadow-2xl xlg:px-24 xlg:py-12 md:px-20 md:py-8 xsm:p-6">
        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-full object-cover lg:w-52 lg:h-52 md:w-32 md:h-32 xsm:w-20 xsm:h-20"
            src={MyPicture}
            alt="jungmin"
          />
          <div className="flex flex-col text-center p-2 text-m_brown mt-5 font-semibold xsm:mt-2">
            {ABOUT_DATA.map((data, index) => {
              return (
                <Link
                  key={index}
                  href={data.link}
                  target={data.target}
                  className="bg-white bg-opacity-50 px-6 py-2 m-2 transition duration-0 hover:bg-l_brown hover:text-white lg:text-lg md:text-base xsm:text-xs xsm:m-1 hover:duration-500 ease-in-out"
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
