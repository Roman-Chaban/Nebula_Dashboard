import {
  CheckboxSize,
  CheckboxSizesMapProps,
  CheckboxVariant,
  CheckboxVariantMapProps,
} from '@/entities/ui/checkbox/model/types';

export const checkboxSizesMap: Record<CheckboxSize, CheckboxSizesMapProps> = {
  sm: { box: '', icon: '', text: '' },
  md: { box: 'relative w-[18px] h-[18px] cursor-pointer', icon: '', text: '' },
  lg: { box: '', icon: '', text: '' },
};

export const checkboxVariantsMap: Record<
  CheckboxVariant,
  CheckboxVariantMapProps
> = {
  default: {
    ring: '',
    checkedBg: '',
    border: '',
  },
  primary: {
    ring: '',
    checkedBg: `checked:bg-[var(--color-deep-blue)] checked:border-transparent
      checked:bg-[var(--color-deep-blue)]
      checked:border-transparent
      checked:after:content-['']
      checked:after:absolute
      checked:after:top-[2px]
      checked:after:left-[5px]
      checked:after:w-[5px]
      checked:after:h-[10px]
      checked:after:border-r-2
      checked:after:border-b-2
      checked:after:border-white
      checked:after:rotate-45
      checked:after:rounded-[0.5px]`,
    border: `
    appearance-none
    border-2
    rounded-[3px]
    border-[var(--color-light-icon)]`,
  },
};
