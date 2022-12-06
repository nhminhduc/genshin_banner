export interface Banner {
  last_date?: string;
  version?: string;
}

export interface Character {
  banner: Banner;
  link: string;
  name: string;
  rarity: string;
  vision_key: string;
}

export interface FromLastBanner {
  noDays: string;
  noVersions: string;
}

export interface CharacterData {
  banner: Banner;
  fromLastBanner: {
    noDays: string;
    noVersions: string;
  };
  link: string;
  name: string;
  rarity: string;
  vision_key: string;
}
