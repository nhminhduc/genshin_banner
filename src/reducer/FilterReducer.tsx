import { Filter } from "types/FilterType";

export const initialState: Filter = {
  nameFilter: "",
  elementFilter: ["anemo", "cryo", "dendro", "electro", "geo", "hydro", "pyro"],
  rarityFilter: ["4", "5"],
};

export const actions = {
  SET_NAME_FILTER: "SET_NAME_FILTER",
  SET_ELEMENT_FILTER: "SET_ELEMENT_FILTER",
  REMOVE_ELEMENT_FILTER: "REMOVE_ELEMENT_FILTER",
  SET_RARITY_FILTER: "SET_RARITY_FILTER",
  REMOVE_RARITY_FILTER: "REMOVE_RARITY_FILTER",
};

type ActionsMap = {
  type: string;
  value?: string | string[];
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
    case actions.REMOVE_ELEMENT_FILTER: {
      const elements = state.elementFilter?.filter(
        (element) => element !== action.value,
      );
      return {
        ...state,
        elementFilter: elements,
      };
    }
    case actions.SET_RARITY_FILTER: {
      return {
        ...state,
        rarityFilter: action.value as string[],
      };
    }
    case actions.REMOVE_RARITY_FILTER: {
      const rarities = state.rarityFilter?.filter(
        (rarity) => rarity !== action.value,
      );
      return {
        ...state,
        rarityFilter: rarities,
      };
    }
    default:
      return state;
  }
};
