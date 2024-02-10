'use client';
import { TeckStackData } from '@/types/portfolio';
import { useState } from 'react';
import StackIcon from '../portfolio/StackIcon';
import StackContent from './StackContent';

export default function TeckStack({
  stackData,
}: {
  stackData: TeckStackData[];
}) {
  const [selected, setSelected] = useState<TeckStackData | null>(
    stackData.length > 0 ? stackData[0] : null
  );
  const handelClick = (stack: TeckStackData) => {
    setSelected(stack);
  };
  return (
    <div className="flex items-center xsm:flex-col">
      <StackContent selected={selected} />
      <ul className="flex max-w-lg flex-wrap justify-center items-center border-8 rounded-md border-clean_white p-8 xsm:p-5">
        {stackData.map((stack) => (
          <li key={stack.id} className="m-5 xsm:w-7 xsm:m-2">
            <StackIcon
              name={stack.name}
              width={50}
              height={50}
              onClick={() => handelClick(stack)}
              type="tag"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
