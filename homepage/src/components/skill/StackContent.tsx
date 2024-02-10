import { StackContentProps } from '@/types/portfolio';
import StackIcon from '../portfolio/StackIcon';

export default function StackContent({ selected }: StackContentProps) {
  return (
    <section className="flex flex-col items-center justify-center w-72 mr-16 xsm:w-64 xsm:mr-0 xsm:flex-row xsm:mb-4">
      <div className="w-full flex flex-col justify-center items-center xsm:mr-3 xsm:h-120">
        <div className="w-1/2 flex justify-center items-center xsm:w-12">
          {selected && (
            <StackIcon name={selected.name} width={90} height={90} />
          )}
        </div>
        <p className="text-xl text-gray-800 font-bold mt-4 mb-6 xsm:text-xs xsm:m-3">
          {selected?.name}
        </p>
      </div>
      <p className="text-justify text-base text-gray-600 xsm:text-sm">
        {selected?.description}
      </p>
    </section>
  );
}
