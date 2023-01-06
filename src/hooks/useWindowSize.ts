import { debounce } from "lodash";
import { useEffect, useState } from "react";

export interface UseWindowSize {
  height?: number;
  width?: number;
}

export function useWindowSize(debounceTime?: number): UseWindowSize {
  const [windowSize, setWindowSize] = useState<UseWindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      if (
        windowSize?.width !== window.innerWidth ||
        windowSize?.height !== window.innerHeight
      ) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    }

    let handlerFn = handleResize;

    if (debounceTime) {
      handlerFn = debounce(handleResize, debounceTime);
    }

    window.addEventListener("resize", handlerFn);

    handleResize();
  }, [windowSize.width, windowSize.height, debounceTime]);

  return windowSize;
}
