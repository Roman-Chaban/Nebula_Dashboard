import type { InputSize, InputState, InputVariant } from '@/shared/ui/Input/model/types';

export const baseContainer = '';
export const baseLabel = '';
export const baseInput =
  'focus:outline-none focus:ring-0 placeholder:text-input-base text-input-base';
export const baseInputRow =
  'w-full max-w-[214px] min-h-[41px] rounded-[49px] bg-main flex items-center gap-[11px] px-[20px]';

export const baseIconLeft = '';
export const baseIconRight = '';
export const baseIcon = '';

export const inputSizeMap: Record<InputSize, string> = {
  sm: '',
  md: '',
  lg: '',
};

export const variantMap: Record<InputVariant, string> = {
  solid: '',
  outline: '',
  ghost: '',
  underline: '',
};

export const stateMap: Record<InputState, string> = {
  default: '',
  error: '',
  success: '',
  warning: '',
};
