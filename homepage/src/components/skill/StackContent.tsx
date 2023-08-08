import { TeckStackData } from '@/service/portfolio';
import StackIcon from '../portfolio/StackIcon';

interface StackContentProps {
  selected: TeckStackData | null;
}

export default function StackContent({ selected }: StackContentProps) {
  return (
    <div className="flex flex-col items-center justify-center w-72 mr-16 xsm:w-40 xsm:mr-0 xsm:flex-row xsm:mb-4">
      <div className="bg-white p-6 rounded-full xsm:w-12 xsm:p-3">
        {selected && <StackIcon name={selected.name} width={70} height={70} />}
      </div>
      <p className="text-xl font-semibold m-4 xsm:text-xs xsm:m-3">
        {selected?.name}
      </p>
    </div>
  );
}
