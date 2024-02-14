import Career from '../skill/Career';
import TeckStack from '../skill/TeckStack';
import { motion } from 'framer-motion';
import { useMotionAnimation } from '../../hooks/useMotionAnimation';

export default function CareerAndSkills() {
  const stackData = require('/data/teckStack.json');
  const { initial, whileInView, viewport, transition } =
    useMotionAnimation(150);

  return (
    <section className="flex lg:gap-28 mt-10 lg:flex-row lg:text-base md:text-sm md:flex-col xsm:mx-10 xsm:flex-col xsm:text-xs gap-10">
      <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
      >
        <h2 className="xlg:text-4xl text-2xl xsm:text-xl font-bold text-dark_black">
          SKILLS
        </h2>
        <TeckStack stackData={stackData} />
      </motion.div>
      <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
      >
        <h2 className="xlg:text-4xl text-2xl xsm:text-xl font-bold text-dark_black">
          CAREER
        </h2>
        <Career />
      </motion.div>
    </section>
  );
}
