import React, { forwardRef } from 'react';
import { ButtonProps } from '@/entities/ui/button/model/types';
import { mergeInputClassNames } from '@/shared/utils/helpers/ui';
import {
  baseButton,
  baseSpinner,
  sizeMap,
  stateMapBtn,
  toneMap,
  variantMap,
} from '@/shared/ui/Button/lib/variants';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = 'button',
      size = 'md',
      variant = 'solid',
      tone = 'neutral',
      loading = false,
      disabled = false,
      className,
      classNames,
      leftIcon,
      rightIcon,
      fullWidth = false,
      onClick,
      icon,
      ...rest
    },
    ref,
  ) => {
    const isDisabled = Boolean(disabled || loading);

    const buttonClassnames = mergeInputClassNames(
      baseButton,
      sizeMap[size],
      variantMap[variant],
      toneMap[tone],
      fullWidth ? 'w-full' : undefined,
      isDisabled ? stateMapBtn.disabled : undefined,
      loading ? stateMapBtn.loading : undefined,
      className,
      classNames?.button,
    );

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading || undefined}
        data-variant={variant}
        data-size={size}
        data-tone={tone}
        className={buttonClassnames || undefined}
        onClick={isDisabled ? undefined : onClick}
        {...rest}
      >
        {loading ? (
          <span className={classNames?.iconLeft}>
            <span
              className={baseSpinner || classNames?.spinner}
              aria-hidden
              aria-label="loading"
            ></span>
          </span>
        ) : (
          leftIcon && (
            <span className={classNames?.iconLeft} aria-hidden>
              {leftIcon}
            </span>
          )
        )}

        {icon}

        <span className={classNames?.label}>{children}</span>

        {rightIcon && !loading && (
          <span className={classNames?.iconRight} aria-hidden>
            {rightIcon}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
