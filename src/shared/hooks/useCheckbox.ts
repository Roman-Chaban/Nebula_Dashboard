import {
  ChangeEvent,
  Ref,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { CheckboxProps } from '@/entities/ui/checkbox/model/types';
import { mergeRefs } from '@/shared/utils/helpers/mergeRefs';
import { NativeInputProps } from '@/shared/hooks/types';

export const useCheckbox = (
  props: Pick<
    CheckboxProps,
    | 'checked'
    | 'defaultChecked'
    | 'indeterminate'
    | 'disabled'
    | 'onCheckedChange'
  >,
  forwardedRef?: Ref<HTMLInputElement>,
) => {
  const {
    checked,
    defaultChecked,
    indeterminate = false,
    disabled,
    onCheckedChange,
  } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const composedRef = useMemo(
    () => mergeRefs(inputRef, forwardedRef),
    [forwardedRef],
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate]);

  const isControlled = typeof checked === 'boolean';
  const visualChecked = isControlled ? !!checked : !!defaultChecked;

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (inputRef.current && inputRef.current.indeterminate) {
        inputRef.current.indeterminate = false;
      }
      onCheckedChange?.(event.currentTarget.checked);
    },
    [onCheckedChange],
  );

  const ariaChecked: React.AriaAttributes['aria-checked'] = indeterminate
    ? 'mixed'
    : visualChecked;

  return {
    ref: composedRef,
    isControlled,
    visualChecked,
    disabled,
    indeterminate,
    getInputProps: (extra?: NativeInputProps): NativeInputProps => ({
      type: 'checkbox',
      role: 'checkbox',
      disabled,
      'aria-checked': ariaChecked,
      ...(isControlled ? { checked } : { defaultChecked }),
      onChange,
      ...(extra ?? {}),
    }),
    getDataAttrs: () => ({
      'data-disabled': disabled ? 'true' : 'false',
      'data-checked': visualChecked ? 'true' : 'false',
      'data-indeterminate': indeterminate ? 'true' : 'false',
    }),
  };
};
