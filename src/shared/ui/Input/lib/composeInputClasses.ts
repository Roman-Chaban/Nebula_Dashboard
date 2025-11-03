import type {
  InputClassNames,
  InputSize,
  InputVariant,
  InputState,
} from '@/entities/ui/input/model/types';
import { base, inputSizeMap, variantMap, stateMap } from '@/shared/ui/Input/lib/theme';
import { joinNonEmpty } from '@/shared/utils/helpers/joinNonEmpty';

export const composeInputClasses = ({
  classNames,
  size,
  variant,
  state,
}: {
  classNames?: InputClassNames;
  size: InputSize;
  variant: InputVariant;
  state: InputState;
}): Required<InputClassNames> => {
  const sizeC = inputSizeMap[size] ?? {};
  const variantC = variantMap[variant] ?? {};
  const stateC = stateMap[state] ?? {};

  return {
    container: joinNonEmpty(
      base.container,
      sizeC.container,
      variantC.container,
      stateC.container,
      classNames?.container,
    ),
    label: joinNonEmpty(base.label, sizeC.label, variantC.label, stateC.label, classNames?.label),
    description: joinNonEmpty(
      base.description,
      sizeC.description,
      variantC.description,
      stateC.description,
      classNames?.description,
    ),
    row: joinNonEmpty(base.row, sizeC.row, variantC.row, stateC.row, classNames?.row),
    input: joinNonEmpty(base.input, sizeC.input, variantC.input, stateC.input, classNames?.input),
    iconLeft: joinNonEmpty(
      base.iconLeft,
      sizeC.iconLeft,
      variantC.iconLeft,
      stateC.iconLeft,
      classNames?.iconLeft,
    ),
    iconRight: joinNonEmpty(
      base.iconRight,
      sizeC.iconRight,
      variantC.iconRight,
      stateC.iconRight,
      classNames?.iconRight,
    ),
    icon: joinNonEmpty(base.icon, sizeC.icon, variantC.icon, stateC.icon, classNames?.icon),
    helper: joinNonEmpty(
      base.helper,
      sizeC.helper,
      variantC.helper,
      stateC.helper,
      classNames?.helper,
    ),
  };
};
