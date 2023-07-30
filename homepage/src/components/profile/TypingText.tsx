'use client';

import { useEffect, useState } from 'react';

export default function TypingText() {
  const aboutText = '안녕하세요.\n주니어 프론트엔드 개발자 이정민입니다.';
  const [typingText, setTypingText] = useState('');
  const [count, setCount] = useState(0);
  const [cursorPosition, setCursorPosition] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypingText((prevText) => {
        let result = prevText ? prevText + aboutText[count] : aboutText[0];
        setCount(count + 1);

        if (count >= aboutText.length) {
          setCount(0);
          setTypingText('');
        }
        setCursorPosition(count);
        return result;
      });
    }, 300);
    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <div className='h-32 xsm:h-16'>
      <pre className="text-slate-700 text-2xl font-bold mb-12 text-center leading-relaxed xsm:text-sm xsm:mb-8">
        {typingText}
        <span className="border-r-2 ml-1 border-slate-700"></span>
      </pre>
    </div>
  );
}
