import { useEffect, useState } from 'react';
import { TextAnimationConfig } from '@/types/portfolio';

export default function TextAnimation({
  initialValue,
  nextText,
  styleText,
}: TextAnimationConfig) {
  const [text, setText] = useState<string>(initialValue);
  const [write, setWrite] = useState<number | null>(null);

  useEffect(() => {
    return () => {
      if (write !== null) {
        clearInterval(write);
      }
    };
  }, [write]);

  const mouseOverHandler = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const splitText = nextText;
    let iteration = 0;

    const intervalId = setInterval(() => {
      const newText = splitText
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return splitText[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');

      setText(newText);

      if (iteration >= splitText.length) {
        clearInterval(intervalId);
      }
      iteration += 1;
    }, 50) as unknown as number;

    setWrite(intervalId);
  };

  const mouseLeaveHandler = () => {
    if (write !== null) {
      clearInterval(write);
      setWrite(null);
    }
    setText(initialValue);
  };

  return (
    <>
      <h1
        className={`font-sans text-4xl inline-block font-bold uppercase tracking-wide hover:text-violet lg:text-6xl xlg:text-7xl ${
          styleText && styleText
        }`}
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        {text}
      </h1>
    </>
  );
}
