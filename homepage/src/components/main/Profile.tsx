import Link from 'next/link';
import TextAnimation from '../profile/TextAnimation';
import ShadowButton from '../ui/ShadowButton';
import { ABOUT_DATA } from '@/constants/portfolioManifest';
import { motion } from 'framer-motion';
import { useMotionAnimation } from '../../hooks/useMotionAnimation';

export default function Profile() {
  const { initial, whileInView, viewport, transition } =
    useMotionAnimation(150);

  return (
    <section className="w-4/5 h-full flex gap-20 items-center overflow-hidden xsm:w-3/4">
      <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
        className="w-full flex flex-col gap-10 font-semibold xsm:gap-5"
      >
        <TextAnimation
          initialValue="FRONTEND DEVELOPER"
          nextText="jungmin PORTFOLIO"
          styleText="xsm:h-20 xsm:w-3/4"
        />
        <motion.ul
          initial={initial}
          whileInView={whileInView}
          viewport={viewport}
          transition={transition}
          className="flex gap-4 xsm:flex-wrap xsm:gap-3"
        >
          {ABOUT_DATA.map((data, index) => {
            return (
              <Link key={index} href={data.link} target={data.target}>
                <ShadowButton text={data.text} />
              </Link>
            );
          })}
        </motion.ul>
      </motion.div>
    </section>
  );
}
