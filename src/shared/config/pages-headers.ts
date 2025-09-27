import { PageHeaderConfigs } from '@/shared/config/lib/types';
import { ROUTES } from '@/shared/config/constants';

const { DASHBOARD, MARKETPLACE, TABLES, KANBAN, PROFILE } = ROUTES;

export const PAGE_HEADER_CONFIGS: PageHeaderConfigs = [
  { path: DASHBOARD, subtitle: 'Main Dashboard', title: 'Pages / Dashboard' },
  { path: MARKETPLACE, subtitle: 'Pages / NFT Marketplace', title: 'NFT Marketplace' },
  { path: TABLES, subtitle: 'Pages / Tables', title: 'Tables' },
  { path: KANBAN, subtitle: 'Pages / Kanban', title: 'Kanban' },
  { path: PROFILE, subtitle: 'Pages / Profile', title: 'Profile' },
];
