import './globals.css';
import { Open_Sans } from 'next/font/google';

const sans = Open_Sans({
  subsets: ['latin'],
});

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
    <html lang="en" className={sans.className}>
      <body className="w-screen mx-auto flex justify-center">{children}</body>
    </html>
  );
}
