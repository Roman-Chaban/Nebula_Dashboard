import { Point } from '@/widgets/Charts/model/types';

export type UseChartKnobProps = {
  primarySeriesPoints: Point[];
  primaryDataSeries: number[];
  clientXToIndex: (clientX: number) => number;
};
