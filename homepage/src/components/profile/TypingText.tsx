'use client';

import { useEffect, useState } from 'react';

export default function TypingText() {
  const aboutText = '안녕하세요.\n주니어 프론트엔드 개발자 이정민입니다.';
  const [typingText, setTypingText] = useState('');
  const [count, setCount] = useState(0);
  const [typingCompleted, setTypingCompleted] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (count < aboutText.length) {
        setTypingText((prevText) => prevText + aboutText[count]);
        setCount((prevCount) => prevCount + 1);
      } else {
        setTypingCompleted(true);
        clearInterval(typingInterval);
        setTimeout(() => {
          setTypingCompleted(false);
          setTypingText('');
          setCount(0);
        }, 1500);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [count]);

  useEffect(() => {
    if (typingCompleted) {
      const cursorBlinkInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      return () => {
        clearInterval(cursorBlinkInterval);
      };
    }
  }, [typingCompleted]);

  return (
    <div className="h-32 xsm:h-16">
      <pre className="text-slate-700 text-2xl font-bold mb-12 text-center leading-relaxed xsm:text-sm xsm:mb-8">
        {typingText}
        <span
          className={`border-r-2 ml-1 border-slate-700 transition duration-500 ease-in-out ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}
        ></span>
      </pre>
    </div>
  );
}
