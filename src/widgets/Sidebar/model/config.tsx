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

export const { HOME, DASHBOARD, MARKET, KANBAN, TABLES, PROFILE, SIGNIN } = ROUTES;

export const sidebarNavItems: NavItems = [
  { id: 1, label: 'Dashboard', icon: <DashboardIcon />, href: DASHBOARD },
  { id: 2, label: 'NFT Marketplace', icon: <MarketplaceIcon />, href: MARKET },
  { id: 3, label: 'Tables', icon: <TablesIcon />, href: TABLES },
  { id: 4, label: 'Kanban', icon: <KanbanIcon />, href: KANBAN },
  { id: 5, label: 'Profile', icon: <ProfileIcon />, href: PROFILE },
  { id: 6, label: 'Sign In', icon: <SigninIcon />, href: SIGNIN },
];

export const upsellCardInfo: UpsellCardInfo = {
  title: 'Upgrade to PRO',
  primarySubtitle: 'to get access to all features! ',
  secondarySubtitle: 'Connect with Venus World!',
};
