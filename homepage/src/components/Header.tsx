import Image from 'next/image';
import Link from 'next/link';

const SPAN_CLASS = 'mx-8';
export default function Header() {
  return (
    <header className="w-full h-20 fixed z-10 flex justify-between items-center px-12 text-white xsm:px-4">
      <Link href="/">
        <h1 className="text-2xl font-bold xsm:text-lg">Leejungmin</h1>
      </Link>
      <div className="text-xl font-semibold xsm:text-sm">
        <span className={SPAN_CLASS}>PROFILE</span>
        <span className={SPAN_CLASS}>SKILL</span>
        <span className={SPAN_CLASS}>PORTFOLIO</span>
        <span className={SPAN_CLASS}>CONTACT</span>
      </div>
      <Link href="">
        <Image src="/images/github-mark.svg" alt="" width={30} height={30} />
      </Link>
    </header>
  );
}
