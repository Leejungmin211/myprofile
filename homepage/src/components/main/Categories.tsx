import { pageMenu } from '@/types/pageElement';

export default function Categories({
  pageArray,
  onClick,
  currentPageNum,
  type,
}: pageMenu) {
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
                className={`w-3 h-3 border rounded-full border-slate-500 my-3 xsm:my-2 xsm:w-2.5 xsm:h-2.5 ${
                  item.pageNum === currentPageNum &&
                  'bg-clean_white border-clean_white'
                } ${
                  item.pageNum === currentPageNum &&
                  (currentPageNum === 2 || currentPageNum === 3) &&
                  'bg-dark_black border-dark_black'
                }`}
              ></div>
            )}
            {type === 'string' && (
              <div
                className={`relative inline-block pb-1.5 after:hover:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-clean_white after:transition-all after:duration-300 after:ease-in-out ${
                  (currentPageNum === 2 || currentPageNum === 3) &&
                  `after:bg-dark_black`
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
