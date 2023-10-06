export default function ShadowButton({ text }: { text: string }) {
  return (
    <button className="relative bg-transparent text-sm border rounded-sm border-transparent_White px-6 py-2 xsm:text-xs xsm:mr-1 after:rounded-sm after:transition-all after:duration-3000 after:ease-in after:absolute after:shadow-white_button after:w-0 after:h-full after:top-0 after:right-0 after:hover:left-0 after:hover:right-auto after:hover:w-full">
      {text}
    </button>
  );
}
