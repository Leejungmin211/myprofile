export default function SvgText({ text }: { text: string }) {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <svg
        width="100%"
        height="100%"
        className="absolute translate-y-72 animate-moveTextAnimate"
      >
        <text
          x="50%"
          y="70%"
          textAnchor="middle"
          className="text-6xl tracking-wide font-extrabold animate-textAnimate xlg:text-140 lg:text-8xl xsm:text-5xl"
        >
          {text}
        </text>
      </svg>
    </div>
  );
}
