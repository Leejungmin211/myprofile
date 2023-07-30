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
    <header className="w-full h-16 fixed z-10 flex justify-between items-end px-12 text-white xsm:px-8">
      <Link href="/">
        <h1 className="text-2xl font-bold xsm:text-xl">Leejungmin</h1>
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
