import { useState } from 'react';
import { motion } from 'framer-motion';
import { useMotionAnimation } from '../../hooks/useMotionAnimation';
import { TeckStackData } from '@/types/portfolio';
import StackIcon from '../portfolio/StackIcon';
import StackContent from './StackContent';

export default function TeckStack({
  stackData,
}: {
  stackData: TeckStackData[];
}) {
  const { initial, whileInView, viewport, transition } =
    useMotionAnimation(155);

  const [selected, setSelected] = useState<TeckStackData | null>(
    stackData.length > 0 ? stackData[0] : null
  );

  const handelClick = (stack: TeckStackData) => {
    setSelected(stack);
  };

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      className="flex flex-col lg:w-[480px] justify-center w-full items-center lg:mt-14 mt-3"
    >
      <StackContent selected={selected} />
      <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
      >
        <ul className="flex flex-wrap justify-center items-center border-8 rounded-md border-clean_white lg:p-7 p-2">
          {stackData.map((stack) => (
            <li key={stack.id} className="lg:m-4 lg:w-10 w-7 m-3">
              <StackIcon
                name={stack.name}
                height={45}
                onClick={() => handelClick(stack)}
                type="tag"
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
