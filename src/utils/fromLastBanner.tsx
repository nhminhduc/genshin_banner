import { Banner } from "../types/CharacterType";
import _ from 'lodash';
import characters from "../assets/data/characters.json";

const VersionFromLastBanner = (banner: Banner) => {
  const currentVersion = "3.2.2";
  const today = _.now();
  const { version } = banner;

  if (version === currentVersion) {
    return 0;
  }

  const versionList = [...new Set(characters.flatMap(({ banner }) => banner?.version).filter((version): version is string => version !== undefined).sort((n1, n2) => {
    if (n1 > n2) return -1;
    if (n1 < n2) return 1;
    return 0;
  }))];
  console.log(versionList);
  return versionList.indexOf(version)
}

export default VersionFromLastBanner;
