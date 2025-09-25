import type { ButtonSize, ButtonTone, ButtonVariant } from '@/entities/ui/button/model/types';

export const baseButton = '';
export const baseSpinner = '';

export const sizeMap: Record<ButtonSize, string> = {
  sm: '',
  md: '',
  lg: '',
};

export const variantMap: Record<ButtonVariant, string> = {
  solid: '',
  outline: '',
  ghost: 'bg-transparent',
  link: '',
};

export const toneMap: Record<ButtonTone, string> = {
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
