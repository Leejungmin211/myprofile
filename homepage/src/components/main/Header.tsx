import Link from 'next/link';
import Categories from './Categories';
import { pageObj } from './FullPage';

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
      className={`w-full h-16 fixed z-10 flex justify-between items-center text-brown ${
        currentPageNum === 2 || currentPageNum === 3
          ? 'duration-300 ease-in-out bg-beige'
          : null
      }`}
    >
      <Link href="/">
        <h1 className="text-2xl font-bold xsm:text-lg px-12 xsm:px-6">
          Leejungmin
        </h1>
      </Link>
      <ul className="flex gap-10 absolute right-8 text-lg font-semibold xsm:hidden">
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
