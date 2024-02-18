import Card from './Card';
import { motion } from 'framer-motion';
import { useMotionAnimation } from '../../hooks/useMotionAnimation';
import { PortfolioData } from '@/types/portfolio';

export default function CardGrid({
  portfolioData,
}: {
  portfolioData: PortfolioData[];
}) {
  const { initial, whileInView, viewport, transition } =
    useMotionAnimation(150);

  return (
    <motion.ul
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      className="w-full gap-8 flex justify-center items-center xl:gap-12 xsm:flex-col xsm:gap-3"
    >
      {portfolioData.map((data) => (
        <li key={data.id}>
          <Card data={data} />
        </li>
      ))}
    </motion.ul>
  );
}
