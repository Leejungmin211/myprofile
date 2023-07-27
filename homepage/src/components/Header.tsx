import Image from 'next/image';
import Link from 'next/link';
import Github from '../../public/images/github-mark.svg';
export default function Header() {
  return (
    <header className="w-full h-20 fixed z-10 flex justify-between items-center px-12 text-white">
      <h1 className="text-2xl font-bold">Leejungmin</h1>
      <div className="text-xl font-semibold">
        <span>PROFILE</span>
        <span>PROFILE</span>
        <span>PROFILE</span>
      </div>
      <Link href="">
        <Image src="/images/github-mark.svg" alt="" width={30} height={30} />
      </Link>
    </header>
  );
}
