'use client';

import { forwardRef, useId } from 'react';
import { CheckboxProps } from '@/entities/ui/checkbox/model/types';
import {
  checkboxSizesMap,
  checkboxVariantsMap,
} from '@/shared/ui/Checkbox/lib/variants';
import { useCheckbox } from '@/shared/hooks/useCheckbox';
import { Input } from '@/shared/ui/index';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      defaultChecked,
      onCheckedChange,
      indeterminate = false,
      disabled = false,
      size = 'md',
      variant = 'default',
      label,
      id,
      className,
      ...rest
    },
    ref,
  ) => {
    const internalId = useId();
    const inputId = id ?? internalId;

    const {
      ref: inputRefProp,
      getInputProps,
      getDataAttrs,
    } = useCheckbox(
      { checked, defaultChecked, indeterminate, disabled, onCheckedChange },
      ref,
    );

    const sizes = checkboxSizesMap[size];
    const variants = checkboxVariantsMap[variant];

    const inputClasses = [
      sizes.box,
      variants.border,
      variants.checkedBg,
      variants.ring,
      sizes.icon,
      className || '',
    ]
      .filter(Boolean)
      .join(' ');

    const labelTextClasses = [sizes.text].filter(Boolean).join(' ');

    return (
      <label
        htmlFor={inputId}
        data-size={size}
        data-variant={variant}
        {...getDataAttrs()}
      >
        <Input
          variant={'ghost'}
          size={size}
          id={inputId}
          ref={inputRefProp}
          className={inputClasses}
          {...getInputProps(rest)}
        />
        {label ? <span className={labelTextClasses}>{label}</span> : null}
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
