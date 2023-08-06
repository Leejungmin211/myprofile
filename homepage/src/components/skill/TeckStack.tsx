import { TeckStackData } from '@/service/portfolio';
import StackIcon from '../portfolio/StackIcon';

export default function TeckStack({
  stackData,
}: {
  stackData: TeckStackData[];
}) {
  return (
    <div className="w-1/2 xsm:w-full">
      <ul className="flex flex-wrap justify-center items-center rounded-md bg-bg_beige p-16 xsm:p-8">
        {stackData.map((stack) => (
          <li key={stack.id} className="m-2 xsm:w-8 xsm:m-1">
            <StackIcon name={stack.name} width={70} height={70} />
          </li>
        ))}
      </ul>
    </div>
  );
}
