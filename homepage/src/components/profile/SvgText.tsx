export default function SvgText({ text }: { text: string }) {
  return (
    <div className="w-full h-full">
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="polka-dots"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          ></pattern>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#polka-dots)"
        ></rect>
        <text
          x="50%"
          y="70%"
          textAnchor="middle"
          className="tracking-wide stroke-pink font-extrabold stroke-3 animate-textAnimate xlg:text-9xl lg:text-8xl md:text-6xl xsm:text-5xl xsm:stroke-1"
        >
          {text}
        </text>
      </svg>
    </div>
  );
}
