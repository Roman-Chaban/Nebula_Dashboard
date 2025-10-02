import {
  DashboardIcon,
  MarketplaceIcon,
  KanbanIcon,
  ProfileIcon,
  TablesIcon,
  SigninIcon,
} from '@/shared/ui/Icons/Icons';
import { NavItems, UpsellCardInfo } from '@/widgets/Sidebar/model/types';
import { ROUTES } from '@/shared/config/constants';

export const { HOME, DASHBOARD, MARKETPLACE: MARKET, KANBAN, TABLES, PROFILE, SIGNIN } = ROUTES;

export const sidebarNavItems: NavItems = [
  { id: 1, label: 'NAVIGATION_MENU.dashboard', icon: <DashboardIcon />, href: DASHBOARD },
  { id: 2, label: 'NAVIGATION_MENU.market', icon: <MarketplaceIcon />, href: MARKET },
  { id: 3, label: 'NAVIGATION_MENU.tables', icon: <TablesIcon />, href: TABLES },
  { id: 4, label: 'NAVIGATION_MENU.kanban', icon: <KanbanIcon />, href: KANBAN },
  { id: 5, label: 'NAVIGATION_MENU.profile', icon: <ProfileIcon />, href: PROFILE },
  { id: 6, label: 'NAVIGATION_MENU.signin', icon: <SigninIcon />, href: SIGNIN },
];

export const upsellCardInfo: UpsellCardInfo = {
  title: 'UPSELL_CARD.title',
  primarySubtitle: 'UPSELL_CARD.primary_subtitle',
  secondarySubtitle: 'UPSELL_CARD.secondary_subtitle',
};
