import { useEffect } from "react";

export function useAsyncEffect(
  effect: () => Promise<void>,
  deps: Array<unknown>
) {
  useEffect(() => {
    effect();

  }, deps);
}
