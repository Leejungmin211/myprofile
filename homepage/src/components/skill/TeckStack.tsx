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
      className="flex flex-col w-[480px] justify-center items-center mt-14 xsm:mt-5 xsm:flex-col"
    >
      <StackContent selected={selected} />
      <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
      >
        <ul className="flex flex-wrap justify-center items-center border-8 rounded-md border-clean_white p-7 xsm:p-5">
          {stackData.map((stack) => (
            <li key={stack.id} className="m-4 xsm:w-7 xsm:m-2">
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
