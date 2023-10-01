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
                className={`hover:text-violet ${
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
