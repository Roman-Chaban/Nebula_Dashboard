import { TextSize, TextWeight } from '@/entities/ui/text/model/types';

export const textSizeVariants: Record<TextSize, string> = {
  sm: 'text-[12px]',
  md: 'text-[14px]',
  m: 'text-[16px]',
  l: 'text-[18px]',
  xl: 'text-[20px]',
  xxl: 'text-[24px]',
};

export const textWeightVariants: Record<TextWeight, string> = {
  '400': 'font-normal',
  '500': 'font-medium',
  '600': 'font-semibold',
  '700': 'font-bold',
  '800': 'font-extrabold',
};
