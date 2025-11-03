import { InputHTMLAttributes } from 'react';

export type CheckboxSize = 'sm' | 'md' | 'lg';
export type CheckboxVariant = 'default' | 'primary';

export type CheckboxProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  size?: CheckboxSize;
  variant?: CheckboxVariant;
  label?: string;
  onCheckedChange?: (checked: boolean) => void;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'size' | 'checked' | 'defaultChecked' | 'children'
>;

export type CheckboxSizesMapProps = { box: string; icon: string; text: string };
export type CheckboxVariantMapProps = { ring: string; checkedBg: string; border: string };
