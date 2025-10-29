import { AVALIABLE_WIDTH, CHART_HEIGHT, GAP } from '@/widgets/Charts/model/constants';
import { DaysData } from '@/widgets/Charts/model/types';

export const getColumnWidth = (data: DaysData) => {
  const columns = data.length;
  return Math.max(12, Math.floor((AVALIABLE_WIDTH - GAP * (columns - 1)) / columns));
};

export const getMaxTotal = (data: DaysData) =>
  Math.max(0, ...data.map((day) => day.segments.reduce((sum, segment) => sum + segment.value, 0)));

export const getValueToPx = (value: number, data: DaysData) => {
  const max = getMaxTotal(data);
  return max === 0 ? 0 : (value / max) * CHART_HEIGHT;
};
