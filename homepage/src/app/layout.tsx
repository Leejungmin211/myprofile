import './globals.css';
import { Nanum_Gothic } from 'next/font/google';

const gothic = Nanum_Gothic({
  weight: '700',
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
    <html lang="en" className={gothic.className}>
      <body className="w-full mx-auto flex justify-center">{children}</body>
    </html>
  );
}
