import { type FC } from 'react';
import { List } from '@/shared/ui/List/ui/List';
import { SidebarNavItem } from './SidebarNavItem';
import { SidebarNavProps } from '@/widgets/Sidebar/model/types';

export const SidebarNav: FC<SidebarNavProps> = ({
  items,
  LinkView = (_item, children) => children,
  className = 'flex flex-col gap-5 pt-[38px] pl-8',
  itemClassName = 'flex items-center gap-3 min-h-[36px]',
}) => {
  return (
    <nav className="grow overflow-y-auto">
      <List
        tag="ul"
        className={className}
        itemClassName={itemClassName}
        getItemKey={(item) => item.id}
        renderList={items}
        renderItem={(item) => LinkView(item, <SidebarNavItem item={item} />)}
      />
    </nav>
  );
};
