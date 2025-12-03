export type InputTypes =
  | 'text'
  | 'tel'
  | 'radio'
  | 'checkbox'
  | 'email'
  | 'password'
  | 'button'
  | 'number'
  | 'url'
  | 'search';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputVariant = 'solid' | 'outline' | 'ghost' | 'underline';
export type InputState = 'default' | 'error' | 'success' | 'warning';

export type InputClassSlots =
  | 'container'
  | 'label'
  | 'description'
  | 'row'
  | 'input'
  | 'iconLeft'
  | 'iconRight'
  | 'icon'
  | 'helper';

export type InputClassNames = Partial<Record<InputClassSlots, string>>;

export type InputProps = {
  label?: string;
  description?: string;
  helperText?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  classNames?: InputClassNames;
  size?: InputSize;
  variant?: InputVariant;
  state?: InputState;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;
