'use client';

import { type FC } from 'react';
import { List } from '@/shared/ui/List/List';
import { SidebarNavItem } from '@/widgets/Sidebar/ui/SidebarNavItem';
import { SidebarNavProps } from '@/widgets/Sidebar/model/types';
import { useSidebarNavItems } from '@/shared/hooks/useSidebarNavItems';

export const SidebarNav: FC<SidebarNavProps> = ({
  LinkView = (_item, children) => children,
  className = 'flex flex-col gap-5 pt-[38px] pl-8',
  itemClassName = 'flex items-center gap-3 min-h-[36px]',
}) => {
  const navItems = useSidebarNavItems();

  return (
    <nav className="grow overflow-y-auto">
      <List
        tag="ul"
        className={className}
        itemClassName={itemClassName}
        getItemKey={(item) => item.id}
        renderList={navItems}
        renderItem={(item) => LinkView(item, <SidebarNavItem item={item} />)}
      />
    </nav>
  );
};

SidebarNav.displayName = 'SidebarNav';
