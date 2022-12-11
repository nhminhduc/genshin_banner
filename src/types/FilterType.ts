export type Filter = {
  elementFilter: string[];
  nameFilter: string;
  rarityFilter: string[];
  sortByVersionNoDesc?: boolean;
};

export type FilterAction = {
  filterByName: (name?: string) => void;
  setElementFilter: (element?: string[]) => void;
  setRarityFilter: (rarity?: string[]) => void;
  setSortByVersionNoDesc: (sortByVersionNoDesc?: boolean) => void;
};
