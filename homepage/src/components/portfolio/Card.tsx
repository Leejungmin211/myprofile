import { PortfolioData } from '@/types/portfolio';
import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from '../../../public/images/icon/github-mark.svg';
import HomeIcon from '../../../public/images/icon/homepage.svg';
import StackIcon from './StackIcon';

export default function Card({ data }: { data: PortfolioData }) {
  const { name, date, path, content, homepage, github, stack } = data;

  return (
    <div className="rounded-2xl overflow-hidden max-w-md border border-slate-300 p-4 transition duration-300 hover:shadow-xl hover:-translate-y-6 xsm:p-1 xsm:hover:-translate-y-0">
      <Link href={homepage} target="_blank">
        <Image
          className="rounded-t-2xl border border-slate-300 w-450 h-300 object-cover xsm:hidden"
          src={`/images/portfolio/${path}.jpg`}
          alt={name}
          sizes="100vw"
          width={450}
          height={300}
        />
      </Link>
      <div className="px-3 my-3 xsm:my-3">
        <div className="flex justify-between items-end">
          <h3 className="text-slate-800 text-lg font-semibold xsm:text-base xsm:mb-2">
            {name}
          </h3>
          <div className="flex gap-3">
            <a href={homepage} target="_blank">
              <Image
                src={HomeIcon}
                alt="homepage"
                height={25}
                className="hover:scale-110 object-cover"
              />
            </a>
            <a href={github} target="_blank">
              <Image
                src={GithubIcon}
                alt="homepage"
                height={25}
                className="hover:scale-110 object-cover"
              />
            </a>
          </div>
        </div>
        <p className="text-slate-600 text-xs pb-4 xsm:pb-2">{date}</p>
        <p className="text-slate-600 tracking-wide text-sm border-t pt-4 xsm:text-xs xsm:pt-3">
          {content}
        </p>
        <ul className="flex items-center gap-3 flex-wrap my-4 xsm:my-3">
          {stack.map((name, index) => (
            <li key={index}>
              <StackIcon name={name} height={20} type="tag" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
