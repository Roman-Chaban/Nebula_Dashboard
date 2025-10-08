import { ReactNode } from 'react';

export type ChartsProps = { children?: ReactNode };

export type ChartsBoxProps = {
  children?: ReactNode;
  paddingClass?: string;
};

export type ChartHeaderExtraBlock = {
  label: string;
  icon?: ReactNode;
};

export type ChartHeaderProps = {
  children?: ReactNode;
  title?: string;
  extraBlock?: ChartHeaderExtraBlock;
};

export type MonthChartInformationTrackItem = {
  title: string;
  icon: ReactNode;
};

export type MonthChartInformationItem = {
  id: number;
  primaryTitle: string;
  primarySubtitle: string;
  perecent: string;
  trackItem: MonthChartInformationTrackItem;
};

export type MonthChartInformationItems = MonthChartInformationItem[];

export type Point = { x: number; y: number };

export type Series = number[];

export type ChartConfig = {
  padding: { top: number; right: number; bottom: number; left: number };
  svg: { width: number; height: number };
};

export type ChartDefsProps = {
  shadowId?: string;
};

export type ChartKnobProps = {
  knob: Point;
  isDragging: boolean;
  onPointerDown: (event: React.PointerEvent) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
  ariaValueMin: number;
  ariaValueMax: number;
  ariaValueNow: number;
  ariaLabel: string;
};

export type ChartLabelsProps = {
  points: Point[];
  labels: string[];
  height: number;
};

export type ChartSvgProps = {
  width: number;
  height: number;
  primarySeriesPath: string;
  secondarySeriesPath: string;
  primarySeriesPoints: Point[];
  labels: string[];
  knob: Point;
  isDragging: boolean;
  selectedIndex: number;
  primaryDataSeries: number[];
  onPointerMove: (event: React.PointerEvent) => void;
  onPointerUp: (event: React.PointerEvent) => void;
  onPointerDown: (event: React.PointerEvent) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
};

export type ChartTooltipProps = {
  knob: Point;
  value: number;
};

export type ChartPathProps = {
  path: string;
  stroke: string;
  strokeWidth: number;
  strokeOpacity?: number;
  filter?: string;
};
