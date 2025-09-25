import { type ReactNode } from 'react';
import { DM_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { Sidebar } from '@/widgets/Sidebar';

export const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_sans',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
