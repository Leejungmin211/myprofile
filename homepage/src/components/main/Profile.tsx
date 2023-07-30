import Image from 'next/image';
import Link from 'next/link';
import MyPicture from '../../../public/images/mypicture.jpg';
import TypingText from '../profile/TypingText';

const ABOUT_DATA = [
  { link: '/', text: 'jungmin.fe@gmail.com' },
  {
    link: 'https://hail-teal-329.notion.site/6bd39f1b9d9f4f11976929634fd7f67e?pvs=4',
    text: 'RESUME',
  },
  { link: 'https://github.com/Leejungmin211', text: 'GITHUB' },
  { link: 'https://velog.io/@jungmin211', text: 'BLOG' },
];

export default function Profile() {
  return (
    <section>
      <TypingText />
      <div className="flex justify-center items-center border-white border-opacity-50 border-2 rounded-2xl p-16 xsm:p-8 xsm:flex-col">
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
                target="_blank"
                className="rounded-3xl border-2 px-6 py-2 m-2 hover:bg-white hover:text-navy xsm:text-xs"
              >
                {data.text}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
