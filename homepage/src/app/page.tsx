import React from 'react';
import Career from '@/components/main/Career';
import MyProfile from '@/components/main/MyProfile';
import Project from '@/components/main/Project';
import ReactFullpage from '@fullpage/react-fullpage';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyProfile />
      <Career />
      <Project />
    </main>
  );
}
