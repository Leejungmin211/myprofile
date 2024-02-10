'use client';
import Link from 'next/link';
import TextAnimation from '../profile/TextAnimation';
import ShadowButton from '../ui/ShadowButton';
import { ABOUT_DATA } from '@/constants/portfolioManifest';

export default function Profile() {
  return (
    <section className="w-4/5 h-full flex gap-20 items-center overflow-hidden xsm:w-3/4">
      <div className="w-full flex flex-col gap-10 font-semibold xsm:gap-5">
        <TextAnimation
          initialValue="FRONTEND DEVELOPER"
          nextText="jungmin PORTFOLIO"
          styleText="-translate-x-20 opacity-0 animate-moveTextAnimate xsm:-translate-x-10 xsm:h-20 xsm:w-3/4"
        />
        <div className="flex gap-4 -translate-x-20 opacity-0 animate-moveContentAnimate xsm:flex-wrap xsm:gap-3 xsm:-translate-x-10">
          {ABOUT_DATA.map((data, index) => {
            return (
              <Link key={index} href={data.link} target={data.target}>
                <ShadowButton text={data.text} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
