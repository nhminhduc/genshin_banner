import { Filter } from "types/FilterType";

export const initialState: Filter = {};

export const actions = {
  SET_NAME_FILTER: "SET_NAME_FILTER",
  SET_ELEMENT_FILTER: "SET_ELEMENT_FILTER",
  SET_RARITY_FILTER: "SET_RARITY_FILTER",
};

type ActionsMap = {
  type: string;
  value?: string;
};

export const FilterReducer = (state: Filter, action: ActionsMap): Filter => {
  switch (action.type) {
    case actions.SET_NAME_FILTER:
      return {
        ...state,
        nameFilter: action.value,
      };
    case actions.SET_ELEMENT_FILTER:
      return {
        ...state,
        elementFilter: action.value,
      };
    case actions.SET_RARITY_FILTER:
      return {
        ...state,
        rarityFilter: action.value,
      };
    default:
      return state;
  }
};
