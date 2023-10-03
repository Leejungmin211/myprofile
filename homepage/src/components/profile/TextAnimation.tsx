import { useEffect, useState } from 'react';

interface Props {
  initialValue: string;
  nextText: string;
  styleText?: string;
}

export default function TextAnimation({
  initialValue,
  nextText,
  styleText,
}: Props) {
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
        className={`font-sans text-5xl inline-block font-bold uppercase tracking-wide hover:text-violet xsm:text-4xl xlg:text-7xl ${
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
