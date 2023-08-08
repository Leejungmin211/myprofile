import { PortfolioData } from '@/service/portfolio';
import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from '../../../public/images/icon/github-mark.svg';
import HomeIcon from '../../../public/images/icon/homepage.svg';
import StackIcon from './StackIcon';

export default function Card({ data }: { data: PortfolioData }) {
  const { name, date, path, content, homepage, github, stack } = data;

  return (
    <div className="rounded-2xl overflow-hidden max-w-md border border-slate-200 p-4 transition duration-300 hover:shadow-xl hover:-translate-y-6 xsm:p-2 xsm:hover:-translate-y-0">
      <Link href={homepage} target="_blank">
        <Image
          className="rounded-t-2xl border border-slate-200 xsm:hidden"
          src={`/images/portfolio/${path}.jpg`}
          alt={name}
          width={450}
          height={450}
        />
      </Link>
      <div className="px-3 my-3 text-slate-700 ">
        <div className="flex justify-between items-end">
          <h2 className="text-lg font-semibold xsm:text-base">{name}</h2>
          <div className="flex gap-3">
            <a href={homepage} target="_blank">
              <Image
                src={HomeIcon}
                alt="homepage"
                width={25}
                height={25}
                className="hover:scale-110"
              />
            </a>
            <a href={github} target="_blank">
              <Image
                src={GithubIcon}
                alt="homepage"
                width={25}
                height={25}
                className="hover:scale-110"
              />
            </a>
          </div>
        </div>
        <p className="text-slate-500 text-xs pb-4">{date}</p>
        <p className="text-slate-600 tracking-wide text-sm border-t pt-4 xsm:text-xs">
          {content}
        </p>
        <ul className="flex items-center gap-3 flex-wrap my-4">
          {stack.map((name, index) => (
            <li key={index}>
              <StackIcon name={name} width={20} height={20} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
