import { PageHeaderConfigs } from '@/shared/config/lib/types';
import { ROUTES } from '@/shared/config/constants';

const { DASHBOARD, MARKETPLACE, TABLES, KANBAN, PROFILE } = ROUTES;

export const PAGE_HEADER_CONFIGS: PageHeaderConfigs = [
  { path: DASHBOARD, title: 'Main Dashboard', subtitle: 'Pages / Dashboard' },
  { path: MARKETPLACE, title: 'NFT Marketplace', subtitle: 'Pages / NFT Marketplace' },
  { path: TABLES, title: 'Tables', subtitle: 'Pages / Tables' },
  { path: KANBAN, title: 'Kanban', subtitle: 'Pages / Kanban' },
  { path: PROFILE, title: 'Profile', subtitle: 'Pages / Profile' },
];
