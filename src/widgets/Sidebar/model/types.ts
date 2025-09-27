import { ReactElement, ReactNode } from 'react';

export type NavItem = {
  id: number;
  label: string;
  icon: ReactElement<{ className?: string }>;
  href: string;
  onClick?: () => void;
};

export type SidebarNavProps = {
  sidebarNavItems: NavItems;
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
  upsellCardInfo: UpsellCardInfo;
};

export type NavItems = NavItem[];

export type NavLinkRenderer = (item: NavItem, children: ReactNode) => ReactNode;
