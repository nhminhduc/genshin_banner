import { config } from "config";
import { Filter } from "types/FilterType";

export const initialState: Filter = {
  nameFilter: "",
  elementFilter: config.elements,
  rarityFilter: config.rarities,
  currentCharacterName: "",
};

export const actions = {
  SET_NAME_FILTER: "SET_NAME_FILTER",
  SET_ELEMENT_FILTER: "SET_ELEMENT_FILTER",
  SET_RARITY_FILTER: "SET_RARITY_FILTER",
  SET_SORT_BY_VERSION_NO_DESC: "SET_SORT_BY_VERSION_NO_DESC",
  SET_CURRENT_CHARACTER_NAME: "SET_CURRENT_CHARACTER_NAME",
};

type ActionsMap = {
  type: string;
  value?: boolean | string | string[];
};

export const FilterReducer = (state: Filter, action: ActionsMap): Filter => {
  switch (action.type) {
    case actions.SET_NAME_FILTER: {
      return {
        ...state,
        nameFilter: action.value as string,
      };
    }
    case actions.SET_ELEMENT_FILTER: {
      return {
        ...state,
        elementFilter: action.value as string[],
      };
    }
    case actions.SET_RARITY_FILTER: {
      return {
        ...state,
        rarityFilter: action.value as string[],
      };
    }
    case actions.SET_SORT_BY_VERSION_NO_DESC: {
      return {
        ...state,
        sortByVersionNoDesc: action.value as boolean,
      };
    }
    case actions.SET_CURRENT_CHARACTER_NAME: {
      return {
        ...state,
        currentCharacterName: action.value as string,
      };
    }
    default:
      return state;
  }
};
