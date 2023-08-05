'use client';

interface SectionProps {
  pageNum: number;
  component: React.FC;
  window: Window;
  pageRefs: React.MutableRefObject<HTMLDivElement[]>;
}

export default function Section(props: SectionProps) {
  const { pageRefs, pageNum } = props;

  return (
    <div
      ref={(element) => {
        pageRefs.current[pageNum] = element!;
      }}
      className={`w-screen h-screen p-32 flex justify-center items-center md:p-12 xsm:p-8 ${
        (pageNum === 2 || pageNum === 3) && 'bg-white xsm:p-4'
      } ${
        pageNum === 1 &&
        'bg-gradient-to-b from-bg_beige via-bg_peach to-bg_gray'
      } ${pageNum === 4 && ' bg-beige'}`}
    >
      {pageNum === 2 || pageNum === 3 ? (
        <div
          className={`rounded-2xl flex justify-center items-center ${
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
