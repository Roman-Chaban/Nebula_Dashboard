import { BaseInputProps, InputClassNames } from '@/entities/ui/input/model/types';

export type InputVariant = 'solid' | 'outline' | 'ghost' | 'underline';
export type InputSize = 'sm' | 'md' | 'lg';
export type InputState = 'default' | 'error' | 'success' | 'warning';

export type InputProps = BaseInputProps & {
  variant?: InputVariant;
  size?: InputSize;
  state?: InputState;
};

export type ComposeInputClassesParams = {
  classNames?: InputClassNames;
  size: InputSize;
  variant: InputVariant;
  state: InputState;
};

export type ComposedInputClasses = {
  container: string;
  label: string;
  row: string;
  input: string;
  iconLeft: string;
  iconRight: string;
  icon: string;
  description?: string;
  helper?: string;
};
