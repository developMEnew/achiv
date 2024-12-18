import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TopNav } from '@/components/layout/top-nav';
import { BottomTabs } from '@/components/layout/bottom-tabs';
import { Providers } from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mobile App',
  description: 'Mobile app with navigation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <TopNav />
          <main className="pt-14 pb-16">{children}</main>
          <BottomTabs />
        </Providers>
      </body>
    </html>
  );
}