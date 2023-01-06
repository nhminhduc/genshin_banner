import { useWindowSize } from "./useWindowSize";

export function useIsMobile(debounceTime?: number): boolean {
  const windowSize = useWindowSize(debounceTime);
  if (windowSize.width && windowSize?.width > 768) {
    return false;
  }
  return true;
}
