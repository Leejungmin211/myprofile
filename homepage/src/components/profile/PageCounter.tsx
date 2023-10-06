export default function PageCounter({
  currentPageNum,
}: {
  currentPageNum: number;
}) {
  return (
    <div className="flex fixed top-1/2 left-16 z-10 xsm:left-5 items-center text-xl xsm:text-base">
      <span
        className={`-mt-10 font-bold xsm:-mt-7 ${
          (currentPageNum === 2 || currentPageNum === 3) && 'text-dark_black'
        }`}
      >{`0${currentPageNum}`}</span>
      <div
        className={`w-px h-16 bg-gray-700 rotate-45 transform origin-left xsm:h-12 ${
          (currentPageNum === 2 || currentPageNum === 3) && 'bg-slate-400'
        }`}
      ></div>
      <span
        className={`mt-10 text-gray-700 xsm:mt-7 ${
          (currentPageNum === 2 || currentPageNum === 3) && 'text-slate-400'
        }`}
      >
        04
      </span>
    </div>
  );
}
