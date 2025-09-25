import { ReactNode, InputHTMLAttributes } from 'react';

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

export type InputClassNames = {
  container?: string;
  label?: string;
  input?: string;
  inputRow?: string;
  iconLeft?: string;
  iconRight?: string;
  icon: string;
  description?: string;
  helper?: string;
};

export type BaseInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'children'> & {
  label?: ReactNode;
  description?: ReactNode;
  helperText?: ReactNode;
  classNames?: InputClassNames;
  children?: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
};
