'use client';

import { type FC } from 'react';

import { SidebarNavItemProps } from '@/widgets/Sidebar/model/types';
import { Container } from '@/shared/ui/Container/Container';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SidebarNavItem: FC<SidebarNavItemProps> = ({ item }) => {
  const pathname = usePathname();
  const { icon, label, href } = item;
  const isActive = pathname === href;
  return (
    <Container htmlTag="div" className="flex min-h-[36px] items-center gap-3">
      {icon}
      <Link
        href={href}
        className={`font-bold ${isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-light-icon)]'}`}
      >
        {label}
      </Link>
    </Container>
  );
};
