import Image from 'next/image';
import Link from 'next/link';
import Categories from './Categories';
import WhiteLogo from '../../../public/images/whiteLogo.svg';
import BlackLogo from '../../../public/images/blackLogo.svg';
import { PageCategory } from '@/types/pageElement';

export default function Header({
  pageArray,
  onClick,
  currentPageNum,
}: PageCategory) {
  return (
    <header className="w-full fixed z-10 p-16 flex justify-between items-center xsm:p-8">
      <Link href="/">
        {currentPageNum === 2 || currentPageNum === 3 ? (
          <Image src={BlackLogo} alt="logo" width="130" />
        ) : (
          <Image src={WhiteLogo} alt="logo" width="130" />
        )}
      </Link>
      <ul
        className={`flex gap-10 text-sm font-extrabold tracking-wide xsm:hidden ${
          (currentPageNum === 2 || currentPageNum === 3) && 'text-dark_black'
        }`}
      >
        <Categories
          pageArray={pageArray}
          onClick={onClick}
          currentPageNum={currentPageNum}
          type="string"
        />
      </ul>
    </header>
  );
}
