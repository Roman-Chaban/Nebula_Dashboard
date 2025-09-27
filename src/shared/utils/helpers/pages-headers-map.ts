import { PAGE_HEADER_CONFIGS } from '@/shared/config/pages-headers';

export const PAGE_HEADERS_MAP: Record<string, { title: string; subtitle: string }> =
  PAGE_HEADER_CONFIGS.reduce(
    (acc, current) => {
      acc[current.path] = { title: current.title, subtitle: current.title };
      return acc;
    },
    {} as Record<string, { title: string; subtitle: string }>,
  );
