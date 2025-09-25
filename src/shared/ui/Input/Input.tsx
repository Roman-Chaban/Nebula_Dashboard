'use client';

import { ChangeEvent, forwardRef, useId } from 'react';
import type { InputProps } from '@/shared/ui/Input/model/types';
import { Container } from '@/shared/ui/Container/Container';
import { composeInputClasses } from '@/shared/ui/Input/lib/composeInputClasses';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      description,
      helperText,
      classNames,
      children,
      leading,
      trailing,
      onChange,
      variant = 'solid',
      size = 'md',
      state = 'default',
      ...rest
    },
    ref,
  ) => {
    const autoId = useId();
    const inputId = id ?? `input_${autoId}`;
    const descriptionId = `${inputId}__description`;
    const helpId = `${inputId}__help`;

    const userDescribedBy = rest['aria-describedby'] as string | undefined;
    const ariaDescribedBy =
      [userDescribedBy, description ? descriptionId : undefined, helperText ? helpId : undefined]
        .filter(Boolean)
        .join(' ') || undefined;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
    };

    const inputClassnames = composeInputClasses({ classNames, size, variant, state });

    return (
      <Container className={inputClassnames.container}>
        {label && (
          <label htmlFor={inputId} className={inputClassnames.label}>
            {label}
            {rest.required ? ' *' : null}
            {description ? (
              <div id={descriptionId} className={inputClassnames.description}>
                {description}
              </div>
            ) : null}
          </label>
        )}

        <div className={inputClassnames.row}>
          {leading ? (
            <span className={inputClassnames.iconLeft} aria-hidden="true">
              <span className={inputClassnames.icon}>{leading}</span>
            </span>
          ) : null}

          <input
            ref={ref}
            id={inputId}
            className={inputClassnames.input}
            aria-describedby={ariaDescribedBy}
            onChange={handleChange}
            {...rest}
          />

          {trailing ? (
            <span className={inputClassnames.iconRight} aria-hidden="true">
              <span className={inputClassnames.icon}>{trailing}</span>
            </span>
          ) : null}
        </div>

        {helperText ? (
          <div id={helpId} className={inputClassnames.helper}>
            {helperText}
          </div>
        ) : null}

        {children}
      </Container>
    );
  },
);

Input.displayName = 'Input';
