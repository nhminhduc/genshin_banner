export type Filter = {
  elementFilter?: string;
  nameFilter?: string;
  rarityFilter?: string;
};

export type FilterAction = {
  filterByName(name?: string): void,
  filterByElement(element?: string): void,
  filterByRarity(rarity?: string): void,
};
