import Image from 'next/image';
import { icons } from '@/constants/portfolioManifest';
import { InteractiveIcon } from '@/types/portfolio';

export default function StackIcon({
  name,
  width,
  height,
  onClick,
  type,
}: InteractiveIcon) {
  const IconComponent = icons[name];
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <>
      {name && IconComponent ? (
        <div className="relative inline-block group">
          {type === 'tag' && (
            <div className="hidden text-sm absolute top-0 -translate-y-10 left-1/2 -translate-x-1/2 my-2 bg-gray-500 px-2 py-1 rounded-md overflow-hidden group-hover:inline-block">
              <div className="truncate">{name}</div>
            </div>
          )}
          <Image
            src={IconComponent}
            alt={IconComponent}
            width={width}
            height={height}
            onClick={handleClick}
            className="cursor-pointer hover:scale-110 hover:transition duration-300"
          />
        </div>
      ) : null}
    </>
  );
}
