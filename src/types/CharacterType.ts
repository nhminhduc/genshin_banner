export interface Banner {
  last_date?: string;
  version?: string;
}

export interface Character {
  banner: Banner;
  found?: boolean;
  link: string;
  name: string;
  rarity: string;
  vision_key: string;
}

export interface FromLastBanner {
  noDays?: number;
  noVersions?: number;
}

export interface Material {
  item: string;
  quantity: number;
  rarity: number;
}

export interface CharacterData extends Character {
  ascension_materials: Material[];
  fromLastBanner: FromLastBanner;
  talent_materials: Material[];
}
