'use client';

interface SectionProps {
  pageNum: number;
  component: React.FC;
  bgColor: string;
  window: Window;
  pageRefs: React.MutableRefObject<HTMLDivElement[]>;
}

export default function Section(props: SectionProps) {
  const { pageRefs, pageNum, bgColor } = props;

  return (
    <div
      ref={(element) => {
        pageRefs.current[pageNum] = element!;
      }}
      className={`w-screen h-screen ${bgColor} p-32 flex justify-center items-center ${
        (pageNum === 2 || pageNum === 3) && 'xsm:bg-white'
      }`}
    >
      {pageNum === 2 || pageNum === 3 ? (
        <div
          className={`w-5/6 h-screen rounded-2xl flex justify-center items-center bg-white ${
            pageNum === 2 && 'mt-72 xsm:mt-54'
          } ${pageNum === 3 && 'mb-72 xsm:mb-54'}`}
        >
          <props.component />
        </div>
      ) : (
        <props.component />
      )}
    </div>
  );
}
