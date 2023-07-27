import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Leejungmin',
  description: '프론트엔드 개발자를 준비하는 이정민의 포토폴리오입니다.',
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
    <html lang="en" className={inter.className}>
      <body className="w-full mx-auto flex justify-center">
        <Header />
        {children}
      </body>
    </html>
  );
}
