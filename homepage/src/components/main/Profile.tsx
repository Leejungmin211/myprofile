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
    <section className="w-full h-full flex flex-col items-center justify-center lg:flex-row">
      <div className="w-1/2 h-1/2 flex flex-col justify-center xsm:w-full xsm:h-2/5">
        <div className="w-full h-20 top-3 z-10 lg:h-48 xlg:h-64 xlg:top-5">
          <SvgText text="FRONTEND" />
        </div>

        <div className="relative h-36 overflow-hidden md:mt-5 lg:h-48 xlg:h-48">
          <p className="absolute px-4 leading-6 text-justify text-brown translate-y-72 animate-moveContentAnimate text-sm xsm:leading-5 xsm:text-xs xsm:px-8 lg:text-lg lg:leading-8 xlg:px-14 xlg:text-xl xlg:leading-10">
            깊이 있는 <span className="text-rose-400 font-bold">Frontend</span>
            개발을 향해 나아가는 이정민입니다. 항상 새로운 것을 배우려는 열린
            자세를 가지고 있으며, 분야를 가리지 않고 개발에 대해서 적극적으로
            확장하며 성장하고자 합니다. 프론트엔드에서 필요한 UI/UX 부분에도
            관심을 가지고 웹 사이트와 애플리케이션 사용자들의 편의성을 고민하고
            개선하려 노력하고 있습니다.
          </p>
        </div>
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
