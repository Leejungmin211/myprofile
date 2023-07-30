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
      className={`w-screen h-screen ${bgColor} p-32 flex justify-center items-center xsm:p-16`}
    >
      <props.component />
    </div>
  );
}
