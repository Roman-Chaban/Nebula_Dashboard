'use client';

import { type FC } from 'react';
import { PageLayoutProps } from '@/entities/ui/page-layout/page-layout';
import { Container } from '@/shared/ui/Container/Container';
import { Header } from '@/widgets/Header/ui/Header';
import { PAGE_HEADERS_MAP } from '@/shared/utils/helpers/pages-headers-map';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/shared/config/constants';

const { HOME } = ROUTES;

export const PageLayout: FC<PageLayoutProps> = ({ children }: PageLayoutProps) => {
  const pathname = usePathname() || HOME;

  const { title, subtitle } = PAGE_HEADERS_MAP[pathname] ?? {
    title: 'Default Title',
    subtitle: 'Default Subtitle',
  };

  return (
    <Container className="flex w-full flex-col gap-[29px] pt-12 pr-[22px] pb-7 pl-[30px]">
      <Header title={title} subtitle={subtitle} />
      <main>{children}</main>
    </Container>
  );
};
