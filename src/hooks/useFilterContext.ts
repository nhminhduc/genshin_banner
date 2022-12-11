import { FilterContext, FilterContextType } from "context/FilterContext";
import { useContext } from "react";

export function useFilterContext() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error(
      "useFilterContext must be used within a FilterContextProvider",
    );
  }
  return context as unknown as FilterContextType;
}
