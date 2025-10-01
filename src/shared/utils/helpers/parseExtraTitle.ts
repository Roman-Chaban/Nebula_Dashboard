import { ExtraTitleParts } from '@/shared/utils/types';

export const parseExtraTitle = (extraTitle?: string): ExtraTitleParts => {
  if (!extraTitle) {
    return { percent: null, restText: null };
  }

  const match = extraTitle.match(/^([+-]?\d+%)(.*)/);
  return {
    percent: match ? match[1] : null,
    restText: match ? match[2].trim() : null,
  };
};
