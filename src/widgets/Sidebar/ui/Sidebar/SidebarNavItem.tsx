import { type FC } from 'react';
import { SidebarNavItemProps } from '@/widgets/Sidebar/model/types';
import Link from 'next/link';

export const SidebarNavItem: FC<SidebarNavItemProps> = ({ item }) => {
  const { icon, label, href } = item;
  return (
    <div className="flex min-h-[36px] items-center gap-3">
      {icon}
      <Link href={href} className="font-bold text-[var(--color-light-icon)]">
        {label}
      </Link>
    </div>
  );
};
