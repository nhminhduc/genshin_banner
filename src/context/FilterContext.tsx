import { createContext, useMemo, useReducer } from "react";
import { actions, FilterReducer, initialState } from "reducer/FilterReducer";
import { Filter, FilterAction } from "types/FilterType";

export type FilterContextType = Filter & FilterAction;
export const FilterContext = createContext<FilterContextType | undefined>(
  undefined,
);

const FilterContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(FilterReducer, initialState);

  const value = useMemo(
    () => ({
      nameFilter: state.nameFilter,
      elementFilter: state.elementFilter,
      rarityFilter: state.rarityFilter,
      sortByVersionNoDesc: state.sortByVersionNoDesc,
      currentCharacterName: state.currentCharacterName,
      filterByName: (name: string | undefined) => {
        dispatch({ type: actions.SET_NAME_FILTER, value: name });
      },
      setElementFilter: (element: string[] | undefined) => {
        dispatch({ type: actions.SET_ELEMENT_FILTER, value: element });
      },
      setRarityFilter: (rarity: string[] | undefined) => {
        dispatch({ type: actions.SET_RARITY_FILTER, value: rarity });
      },
      setSortByVersionNoDesc: (sortByVersionNoDesc: boolean | undefined) => {
        dispatch({
          type: actions.SET_SORT_BY_VERSION_NO_DESC,
          value: sortByVersionNoDesc,
        });
      },
      setCurrentCharacterName: (name: string | undefined) => {
        dispatch({ type: actions.SET_CURRENT_CHARACTER_NAME, value: name });
      },
    }),
    [state, dispatch],
  );

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
