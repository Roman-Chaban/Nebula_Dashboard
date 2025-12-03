import { type Ref } from 'react';

export function mergeRefs<T>(...refs: Array<Ref<T> | undefined>) {
  return (node: T) => {
    for (const ref of refs) {
      if (!ref) continue;
      if (typeof ref === 'function') ref(node);
      else ref.current = node;
    }
  };
}
