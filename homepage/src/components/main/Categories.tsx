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
            className='cursor-pointer text-center'
          >
            {type === 'number' && <span className={`${
              item.pageNum === currentPageNum && 'text-white text-base'}
            `}>●</span>} 
            {type === 'string' && (
              <span className="hover:text-slate-600 transition duration-0 hover:duration-500 ease-in-out">
                {item.name}
              </span>
            )}
          </li>
        ))}
    </>
  );
}
