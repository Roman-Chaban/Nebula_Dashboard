import { ReactNode } from 'react';

export type NavItem = {
  id: number;
  label: string;
  icon: ReactNode;
  href: string;
  onClick?: () => void;
};

export type NavItems = NavItem[];

export type NavLinkRenderer = (item: NavItem, children: ReactNode) => ReactNode;

export type SidebarNavProps = {
  items: NavItems;
  className?: string;
  itemClassName?: string;
  LinkView?: NavLinkRenderer;
};

export type SidebarNavItemProps = {
  item: NavItem;
};

export type UpsellCardInfo = {
  title: string;
  primarySubtitle: string;
  secondarySubtitle: string;
};

export type UpsellCardProps = {
  info: UpsellCardInfo;
};
