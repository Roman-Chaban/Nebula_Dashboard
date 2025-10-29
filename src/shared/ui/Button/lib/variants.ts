import type { ButtonSize, ButtonTone, ButtonVariant } from '@/entities/ui/button/model/types';

export const baseButton = '';
export const baseSpinner = '';

export const sizeMap: Record<ButtonSize, string> = {
  sm: 'max-w-[33px] min-h-[33px]',
  md: '',
  lg: '',
};

export const variantMap: Record<ButtonVariant, string> = {
  base: 'flex items-center justify-center cursor-pointer rounded-[10px]',
  solid: '',
  outline: '',
  ghost: 'bg-transparent',
  link: '',
};

export const toneMap: Record<ButtonTone, string> = {
  base: 'bg-[var(--color-main)]',
  neutral: '',
  primary: '',
  success: '',
  warning: '',
  danger: '',
};

export const stateMapBtn = {
  disabled: 'is-disabled',
  loading: 'is-loading',
} as const;
