import './globals.css';
import { Nanum_Gothic } from 'next/font/google';

const namumGothic = Nanum_Gothic({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: '프론트엔드 개발자_이정민',
  description: '기술스택, 프로젝트를 담은 포토폴리오입니다.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={namumGothic.className}>
      <body className="w-screen mx-auto flex justify-center text-clean_white bg-dark_black">
        {children}
      </body>
    </html>
  );
}
