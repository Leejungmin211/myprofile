import { PageCategory } from './Header';

interface Props extends PageCategory {
  type: string;
}

export default function Categories({
  pageArray,
  onClick,
  currentPageNum,
  type,
}: Props) {
  return (
    <>
      {pageArray &&
        pageArray.map((item, index) => (
          <li
            key={index}
            onClick={() => onClick(item.pageNum)}
            className="cursor-pointer text-center"
          >
            {type === 'number' && (
              <div
                className={`w-3 h-3 border rounded-full border-slate-500 my-3 ${
                  item.pageNum === currentPageNum &&
                  'bg-clean_white border-clean_white'
                }`}
              ></div>
            )}
            {type === 'string' && (
              <div
                className={`relative inline-block pb-1.5 after:hover:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-clean_white after:transition-all after:duration-300 after:ease-in-out ${
                  item.pageNum === currentPageNum && 'text-violet'
                }`}
              >
                {item.name}
              </div>
            )}
          </li>
        ))}
    </>
  );
}
