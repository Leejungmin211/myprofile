export default function PageCounter({
  currentPageNum,
}: {
  currentPageNum: number;
}) {
  return (
    <div className="flex fixed top-1/2 left-16 z-10 xsm:left-3 items-center text-xl">
      <span className="-mt-10 font-bold">{`0${currentPageNum}`}</span>
      <div className="w-px h-16 bg-gray-700 rotate-45 transform origin-left"></div>
      <span className="mt-10 text-gray-700">04</span>
    </div>
  );
}
