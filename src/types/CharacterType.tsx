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
  found?: boolean;
}

export interface FromLastBanner {
  noDays: string;
  noVersions: string;
}

export interface CharacterData extends Character {
  fromLastBanner: FromLastBanner;
}
