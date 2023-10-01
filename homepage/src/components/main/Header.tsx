import Image from 'next/image';
import Link from 'next/link';
import Categories from './Categories';
import { pageObj } from './FullPage';
import Logo from '../../../public/images/logo.jpg';

export interface PageCategory {
  pageArray: pageObj[];
  onClick: (pageNum: number) => void;
  currentPageNum: number;
}

export default function Header({
  pageArray,
  onClick,
  currentPageNum,
}: PageCategory) {
  return (
    <header
      className="w-full fixed z-10 p-16 flex justify-between items-center"
    >
      <Link href="/">
        <Image src={Logo} alt="logo" width="130" />
      </Link>
      <ul className="flex gap-10 text-sm font-extrabold tracking-wide xsm:hidden">
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
