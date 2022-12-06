import { createContext, useMemo, useReducer } from "react";
import { actions, FilterReducer, initialState } from "reducer/FilterReducer";
import { Filter } from "types/FilterType";

const FilterContext = createContext<Filter | undefined>(undefined);

const FilterContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(FilterReducer, initialState);

  const value = useMemo(
    () => ({
      nameFilter: state.nameFilter,
      elementFilter: state.elementFilter,
      rarityFilter: state.rarityFilter,
      filterByName: () => {
        dispatch({ type: actions.SET_NAME_FILTER });
      },
      filterByElement: () => {
        dispatch({ type: actions.SET_ELEMENT_FILTER });
      },
      filterByRarity: () => {
        dispatch({ type: actions.SET_RARITY_FILTER });
      },
    }),
    [state, dispatch],
  );

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
