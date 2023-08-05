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
    <section className="w-full flex items-center justify-center xsm:flex-col">
      <div className="w-1/3 lg:mr-5 xsm:h-16 xsm:mb-20 xsm:w-full">
        <SvgText text="Frontend" />
        <SvgText text="developer" />
      </div>
      <div className="flex justify-center items-center border-white border-opacity-50 border rounded-lg shadow-white shadow-lg px-24 py-12 xsm:p-8">
        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-full object-cover w-60 h-60 sm:w-30 sm:h-30 xsm:w-20 xsm:h-20"
            src={MyPicture}
            alt="jungmin"
          />
          <div className="flex flex-col text-center p-2 text-m_brown text-lg mt-5 font-semibold xsm:ml-4">
            {ABOUT_DATA.map((data, index) => {
              return (
                <Link
                  key={index}
                  href={data.link}
                  target={data.target}
                  className="bg-white bg-opacity-50 px-6 py-2 m-2 transition duration-0 hover:bg-l_brown hover:text-white xsm:text-xs hover:duration-500 ease-in-out"
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
