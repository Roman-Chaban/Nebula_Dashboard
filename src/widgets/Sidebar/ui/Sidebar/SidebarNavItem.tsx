'use client';

import { type FC } from 'react';

import { SidebarNavItemProps } from '@/widgets/Sidebar/model/types';
import { Container } from '@/shared/ui/Container/Container';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const SidebarNavItem: FC<SidebarNavItemProps> = ({ item }) => {
  const pathname = usePathname();
  const { icon, label, href } = item;
  const isActive = pathname === href;
  const iconClass = isActive ? 'text-[var(--color-deep-blue)]' : 'text-[var(--color-light-icon)]';
  const isActiveDecoration = isActive
    ? "after:absolute after:right-0 after:h-full after:rounded-[25px] after:w-1 after:bg-[var(--color-deep-blue)] after:content-['']"
    : '';

  return (
    <Container
      htmlTag="div"
      className={`relative flex ${isActiveDecoration} min-h-[36px] w-full items-center gap-3`}
    >
      {React.isValidElement(icon) ? React.cloneElement(icon, { className: iconClass }) : null}
      <Link
        href={href}
        className={`font-bold ${isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-light-icon)]'}`}
      >
        {label}
      </Link>
    </Container>
  );
};
