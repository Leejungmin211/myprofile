'use client';

import React, { useEffect, useRef, useState } from 'react';
import Profile from './Profile';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import Section from './Section';
import Categories from './Categories';
import Header from './Header';

export interface pageObj {
  pageNum: number;
  component: React.FC;
  name: string;
  bgColor: string;
}

export const pageArray = [
  { pageNum: 1, component: Profile, name: 'PROFILE', bgColor: 'bg-[#98c1fa]' },
  { pageNum: 2, component: Skill, name: 'SKILL', bgColor: 'bg-[#a1ccd1]' },
  { pageNum: 3, component: Project, name: 'PROJECT', bgColor: 'bg-[#a5c0dd]' },
  { pageNum: 4, component: Contact, name: 'CONTACT', bgColor: 'bg-[#ffd0d0]' },
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

  const handlePageChange = () => {
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
      <Header
        pageArray={pageArray}
        onClick={handlePointClick}
        currentPageNum={currentPageNum}
      />
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
        <ul className="flex flex-col space-y-3 fixed top-96 right-10 z-10 text-xs text-slate-500 xsm:right-6">
          <Categories
            pageArray={pageArray}
            onClick={handlePointClick}
            currentPageNum={currentPageNum}
            type="number"
          />
        </ul>
      </main>
    </div>
  );
}
