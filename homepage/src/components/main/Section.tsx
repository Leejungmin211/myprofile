'use client';
import { SectionProps } from '@/types/pageElement';

export default function Section(props: SectionProps) {
  const { pageRefs, pageNum } = props;

  return (
    <div
      ref={(element) => {
        pageRefs.current[pageNum] = element!;
      }}
      className={`w-screen h-screen p-32 flex justify-center items-center md:p-12 xsm:p-8 ${
        (pageNum === 2 || pageNum === 3) && 'bg-beige xsm:p-4'
      }`}
    >
      {pageNum === 2 || pageNum === 3 ? (
        <div
          className={`flex justify-center items-center ${pageNum === 2 && ''} ${
            pageNum === 3 && 'xsm:mb-2'
          }`}
        >
          <props.component />
        </div>
      ) : (
        <props.component />
      )}
    </div>
  );
}
