'use client';

import React, { type FC } from 'react';
import { SidebarNavItemProps } from '@/widgets/Sidebar/model/types';
import { Container } from '@/shared/ui/Container/Container';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export const SidebarNavItem: FC<SidebarNavItemProps> = ({ item }) => {
  const pathname = usePathname();
  const { icon, label, href } = item;

  const { t } = useTranslation();

  const isActive = pathname ? pathname.startsWith(href) : false;

  const iconClass = `flex-shrink-0 ${isActive ? 'text-[var(--color-deep-blue)]' : 'text-[var(--color-light-icon)]'}`;

  const isActiveDecoration = isActive
    ? "after:absolute after:right-0 after:h-full after:rounded-[25px] after:w-1 after:bg-[var(--color-deep-blue)] after:content-['']"
    : '';

  return (
    <Container
      htmlTag="div"
      className={`relative flex ${isActiveDecoration} min-h-[36px] w-full items-center gap-3`}
    >
      {React.cloneElement(icon, { className: iconClass })}
      <Link
        href={href}
        className={`font-bold ${isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-light-icon)]'}`}
      >
        {t(label)}
      </Link>
    </Container>
  );
};
