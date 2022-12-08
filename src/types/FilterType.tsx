export type Filter = {
  nameFilter?: string;
  elementFilter?: string[];
  rarityFilter?: string[];
};

export type FilterAction = {
  filterByName(name?: string): void,
  setElementFilter(element?: string[]): void,
  removeElementFilter(element?: string): void,
  setRarityFilter(rarity?: string[]): void,
  removeRarityFilter(rarity?: string): void,
};
