import { StackContentProps } from '@/types/portfolio';
import StackIcon from '../portfolio/StackIcon';

export default function StackContent({ selected }: StackContentProps) {
  return (
    <div className="w-full flex gap-3 items-center justify-between px-10 mb-6 h-32 xsm:w-64 xsm:mr-0 xsm:flex-row xsm:mb-4">
      <div className="w-1/4 overflow-hidden flex flex-col justify-center items-center gap-2 xsm:h-120">
        <div className="w-[50px] flex justify-center items-center overflow-hidden xsm:w-12">
          {selected && <StackIcon name={selected.name} height={65} />}
        </div>
        <p className="text-gray-800 font-bold xsm:text-xs xsm:m-3">
          {selected?.name}
        </p>
      </div>
      <div className="w-3/4">
        <p className="text-justify text-base text-gray-600 xsm:text-sm">
          {selected?.description}
        </p>
      </div>
    </div>
  );
}
