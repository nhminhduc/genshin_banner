import { Filter } from "types/FilterType";

export const initialState: Filter = {};

export const actions = {
  SET_NAME_FILTER: "SET_NAME_FILTER",
  SET_ELEMENT_FILTER: "SET_ELEMENT_FILTER",
  SET_RARITY_FILTER: "SET_RARITY_FILTER",
};

type ActionsMap = {
  type: string;
};

export const FilterReducer = (state: Filter, action: ActionsMap): Filter => {
  switch (action.type) {
    case actions.SET_NAME_FILTER:
      return {
        ...state,
        nameFilter: state.nameFilter,
      };
    case actions.SET_ELEMENT_FILTER:
      return {
        ...state,
        elementFilter: state.elementFilter,
      };
    case actions.SET_RARITY_FILTER:
      return {
        ...state,
        rarityFilter: state.rarityFilter,
      };
    default:
      return state;
  }
};
