import CardGrid from '../portfolio/CardGrid';
import { motion } from 'framer-motion';
import { useMotionAnimation } from '../../hooks/useMotionAnimation';

export default function Project() {
  const portfolioData = require('/data/portfolio.json');

  const { initial, whileInView, viewport, transition } =
    useMotionAnimation(150);

  return (
    <motion.section
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      className="xsm:mx-10"
    >
      <h2 className="xlg:text-4xl text-3xl font-bold text-dark_black text-right m-5 xsm:text-2xl xsm:mb-5">
        PROJECT
      </h2>
      <CardGrid portfolioData={portfolioData} />
    </motion.section>
  );
}
