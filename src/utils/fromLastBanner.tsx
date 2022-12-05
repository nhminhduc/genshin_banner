import useVersionList from "../hooks/useVersionList";
import { Banner } from "../types/CharacterType";
import { formatDistanceToNowStrict, parseISO } from "date-fns";

const fromLastBanner = (banner: Banner) => {
  const currentVersion = "3.2.2";
  const { version, last_date: lastDate } = banner;

  if (version === currentVersion) {
    return { noVersions: "0", noDays: "0" };
  }

  const versionList = useVersionList();
  const noVersion = version ? versionList.indexOf(version) as unknown as string : "";
  const noDays = lastDate ? formatDistanceToNowStrict(parseISO(lastDate), { addSuffix: true, unit: "day" }) : "";
  return { noVersions: noVersion, noDays: noDays };
}

export default fromLastBanner;
