import { TextProperties } from '@/entities/ui/text/model/types';
import { ColumnWidths } from '@/widgets/CheckTable/model/types';

export const textStyles: TextProperties = {
  color: 'text-primary',
  size: 'md',
  weight: '700',
};

export const columnWidths: ColumnWidths = [
  'flex-[2] min-w-[220px] text-left',
  'flex-1 min-w-[100px] text-left',
  'flex-1 min-w-[100px] text-left',
  'flex-1 min-w-[120px] text-left',
];
