import { ROUTES } from '@/shared/config/constants';

export const { DASHBOARD, MARKETPLACE, TABLES, KANBAN, PROFILE } = ROUTES;

export const PAGE_HEADER_CONFIGS = [
  {
    path: DASHBOARD,
    titleKey: 'PAGE_HEADERS.dashboard.title',
    subtitleKey: 'PAGE_HEADERS.dashboard.subtitle',
  },
  {
    path: MARKETPLACE,
    titleKey: 'PAGE_HEADERS.marketplace.title',
    subtitleKey: 'PAGE_HEADERS.marketplace.subtitle',
  },
  {
    path: TABLES,
    titleKey: 'PAGE_HEADERS.tables.title',
    subtitleKey: 'PAGE_HEADERS.tables.subtitle',
  },
  {
    path: KANBAN,
    titleKey: 'PAGE_HEADERS.kanban.title',
    subtitleKey: 'PAGE_HEADERS.kanban.subtitle',
  },
  {
    path: PROFILE,
    titleKey: 'PAGE_HEADERS.profile.title',
    subtitleKey: 'PAGE_HEADERS.profile.subtitle',
  },
];
