import Career from '../skill/Career';
import TeckStack from '../skill/TeckStack';
import { motion } from 'framer-motion';
import { useMotionAnimation } from '../../hooks/useMotionAnimation';

export default function CareerAndSkills() {
  const stackData = require('/data/teckStack.json');
  const { initial, whileInView, viewport, transition } =
    useMotionAnimation(150);

  return (
    <section className="flex gap-24 mt-10 xsm:mx-10">
      <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
      >
        <h2 className="xlg:text-4xl text-3xl xsm:text-2xl font-bold text-dark_black">
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
        <h2 className="xlg:text-4xl text-3xl xsm:text-2xl text-right font-bold text-dark_black">
          Career
        </h2>
        <div className="mt-1 xsm:mt-5">
          <Career />
        </div>
      </motion.div>
    </section>
  );
}
