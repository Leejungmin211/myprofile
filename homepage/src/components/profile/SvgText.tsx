export default function SvgText({ text }: { text: string }) {
  return (
    <div className="w-full h-full">
      <svg width="100%" height="100%">
        <text
          x="50%"
          y="70%"
          textAnchor="middle"
          className="tracking-wide font-extrabold animate-textAnimate xlg:text-9xl lg:text-8xl md:text-6xl xsm:text-5xl"
        >
          {text}
        </text>
      </svg>
    </div>
  );
}
