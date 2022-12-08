export type Filter = {
  elementFilter?: string[];
  nameFilter?: string;
  rarityFilter?: string[];
};

export type FilterAction = {
  filterByName: (name?: string) => void;
  removeElementFilter: (element?: string) => void;
  removeRarityFilter: (rarity?: string) => void;
  setElementFilter: (element?: string[]) => void;
  setRarityFilter: (rarity?: string[]) => void;
};
