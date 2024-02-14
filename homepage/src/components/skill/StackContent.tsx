import { StackContentProps } from '@/types/portfolio';
import StackIcon from '../portfolio/StackIcon';

export default function StackContent({ selected }: StackContentProps) {
  return (
    <div className="w-full lg:h-32 flex gap-2 lg:gap-3 items-center justify-between px-10 lg:mb-6 h-20 mb-2">
      <div className="w-1/4 overflow-hidden flex flex-col justify-center items-center gap-2">
        <div className="lg:w-[50px] w-10 flex justify-center items-center overflow-hidden">
          {selected && <StackIcon name={selected.name} height={65} />}
        </div>
        <p className="text-gray-800 font-bold xsm:m-3">{selected?.name}</p>
      </div>
      <div className="w-3/4">
        <p className="text-justify text-gray-600">{selected?.description}</p>
      </div>
    </div>
  );
}
