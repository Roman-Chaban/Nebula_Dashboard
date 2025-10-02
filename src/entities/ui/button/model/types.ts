import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonTypes = 'button' | 'submit' | 'reset';
export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonTone = 'neutral' | 'primary' | 'success' | 'warning' | 'danger';

export type ButtonClassNames = {
  button?: string;
  label?: string;
  iconLeft?: string;
  iconRight?: string;
  spinner?: string;
};

export type BaseButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  type?: ButtonTypes;
  className?: string;
  classNames?: ButtonClassNames;
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
};

export type ButtonProps = BaseButtonProps & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: ButtonTone;
};
