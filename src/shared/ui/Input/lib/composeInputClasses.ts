import { mergeInputClassNames } from '@/shared/utils/helpers/ui';
import type {
  ComposedInputClasses,
  ComposeInputClassesParams,
} from '@/shared/ui/Input/model/types';
import {
  baseContainer,
  baseInput,
  baseInputRow,
  baseLabel,
  baseIconLeft,
  baseIconRight,
  baseIcon,
  inputSizeMap,
  stateMap,
  variantMap,
} from '@/shared/ui/Input/lib/variants';

export const composeInputClasses = ({
  classNames,
  size,
  variant,
  state,
}: ComposeInputClassesParams): ComposedInputClasses => {
  return {
    container: mergeInputClassNames(baseContainer, classNames?.container),
    label: mergeInputClassNames(baseLabel, classNames?.label),
    row: mergeInputClassNames(baseInputRow, classNames?.inputRow),
    input: mergeInputClassNames(
      baseInput,
      inputSizeMap[size],
      variantMap[variant],
      stateMap[state],
      classNames?.input,
    ),
    iconLeft: mergeInputClassNames(baseIconLeft, classNames?.iconLeft),
    iconRight: mergeInputClassNames(baseIconRight, classNames?.iconRight),
    icon: mergeInputClassNames(baseIcon, classNames?.icon),
    description: classNames?.description,
    helper: classNames?.helper,
  };
};
