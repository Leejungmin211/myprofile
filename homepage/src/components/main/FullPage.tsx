'use client';
import React, { useEffect, useRef, useState } from 'react';
import Career from './Career';
import MyProfile from './MyProfile';
import Project from './Project';
import Section from './Section';

export interface pageObj {
  pageNum: number;
  component: React.FC;
  bgColor: string;
}

const pageArray = [
  { pageNum: 1, component: MyProfile, bgColor: 'bg-[#98c1fa]' },
  { pageNum: 2, component: Project, bgColor: 'bg-[#8ad9c8]' },
  { pageNum: 3, component: Career, bgColor: 'bg-[#ccc]' },
];

export default function FullPage() {
  const [windowObj, setWindowObj] = useState<Window | null>(null);
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const totalNum = pageArray.length;
  const pageRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (window !== undefined) {
      setWindowObj(window);
    }
  }, []);

  const handlePageChange = (event: Event) => {
    if (!windowObj) return;

    let scroll = windowObj.scrollY;
    for (let i = 1; i <= totalNum; i++) {
      if (
        scroll > pageRefs.current[i].offsetTop - windowObj!.outerHeight / 3 &&
        scroll <
          pageRefs.current[i].offsetTop -
            windowObj.outerHeight / 3 +
            pageRefs.current[i].offsetHeight
      ) {
        setCurrentPageNum(i);
        break;
      }
    }
  };

  const handlePointClick = (pageNum: number) => {
    if (windowObj) {
      windowObj.scrollTo({
        top: pageRefs.current[pageNum].offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    windowObj?.addEventListener('scroll', handlePageChange);
    return () => {
      windowObj?.removeEventListener('scroll', handlePageChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowObj]);

  return (
    <div className="w-screen h-screen">
      <main className="relative">
        {pageArray.map((item, index) => {
          return (
            <Section
              key={index}
              pageNum={item.pageNum}
              component={item.component}
              bgColor={item.bgColor}
              window={windowObj!}
              pageRefs={pageRefs}
            />
          );
        })}
        <div className="flex flex-col space-y-4 fixed top-96 right-10 z-10">
          {/* 페이지 버튼 렌더링 */}
          {pageArray.map((item, index) => (
            <button key={index} onClick={() => handlePointClick(item.pageNum)}>
              {item.pageNum}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
