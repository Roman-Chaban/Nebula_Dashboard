import { type ReactNode } from 'react';

import { DM_Sans } from 'next/font/google';

import { Sidebar } from '@/widgets/Sidebar';
import { Container } from '@/shared/ui/Container/Container';

import { Provider } from 'react-redux';
import { store } from '@/shared/store/store';

import '@/styles/globals.css';

export const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_sans',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${dm_sans.className}`}>
        <Provider store={store}>
          <Container className="mx-auto flex w-full max-w-[1920px]">
            <Sidebar />
            {children}
          </Container>
        </Provider>
      </body>
    </html>
  );
}
