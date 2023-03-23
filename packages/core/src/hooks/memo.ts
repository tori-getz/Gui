import { shallowEqual } from 'shallow-equal';
import { ref } from './ref';

export const memo = <T = unknown>(
  create: () => T,
  deps: Array<unknown>,
): T => {
  const value = ref<T>(create());
  const prevDeps = ref<Array<unknown>>([]);

  if (!shallowEqual(deps, prevDeps.current)) {
    value.current = create();
    prevDeps.current = [...deps];
  }

  return value.current as T;
}
