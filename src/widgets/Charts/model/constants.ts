import type { ChartConfig } from '@/widgets/Charts/model/types';

export const CHART_MONTH_LABELS = ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'];

export const PRIMARY_DATA_SERIES = [95, 102, 108, 98, 115, 112];

export const SECONDARY_DATA_SERIES = [82, 92, 100, 90, 98, 105];

export const CHART_CONFIG: ChartConfig = {
  padding: { top: 32, right: 24, bottom: 56, left: 24 },
  svg: { width: 760, height: 220 },
};

export const THUMB_WIDTH = 600;
export const THUMB_HEIGHT = 120;
export const BOTTOM_MARGIN = 28;
export const CHART_HEIGHT = THUMB_HEIGHT - BOTTOM_MARGIN;
export const PADDING_X = 24;

export const AVALIABLE_WIDTH = THUMB_WIDTH - PADDING_X * 2;
export const GAP = 12;
