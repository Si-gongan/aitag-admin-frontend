import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { DataStoreProvider } from '@/providers/data-store-provider';

export const metadata: Metadata = {
  title: '에이택 어드민',
  description: 'AI 대체 텍스트 제작 서비스 관리자 페이지',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.className}>
      <body className="flex flex-col items-center w-full my-120">
        <DataStoreProvider>{children}</DataStoreProvider>
      </body>
    </html>
  );
}
