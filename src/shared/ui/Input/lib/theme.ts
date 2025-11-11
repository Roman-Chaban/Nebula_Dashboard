import type {
  InputSize,
  InputState,
  InputVariant,
} from '@/shared/ui/Input/model/types';
import { InputClassNames } from '@/entities/ui/input/model/types';

export const base: Required<InputClassNames> = {
  container: '',
  label: '',
  description: '',
  row: '',
  input: '',
  iconLeft: '',
  iconRight: '',
  icon: '',
  helper: '',
};

export const inputSizeMap: Record<InputSize, InputClassNames> = {
  sm: {},
  md: {},
  lg: {},
};

export const variantMap: Record<InputVariant, InputClassNames> = {
  solid: {
    container:
      'flex items-center bg-[var(--color-main)] rounded-[49px] min-h-[41px]',
    row: 'flex items-center gap-[11px] pl-[20px]',
    input:
      'focus:outline-none focus:ring-0 placeholder:text-input-base text-input-base',
  },
  outline: {
    container: '',
    row: '',
    input: '',
  },
  ghost: {
    container: 'w-6 h-6',
    row: '',
    input:
      'focus:outline-none focus:ring-0 placeholder:text-input-base text-input-base',
  },
  underline: {
    container: '',
    row: '',
    input: '',
  },
};

export const stateMap: Record<InputState, InputClassNames> = {
  default: {},
  error: {},
  success: {},
  warning: {},
};
