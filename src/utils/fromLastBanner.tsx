import { formatDistanceToNowStrict, parseISO } from "date-fns";
import useVersionList from "hooks/useVersionList";
import { Banner, FromLastBanner } from "types/CharacterType";

const GetFromLastBanner = (banner: Banner): FromLastBanner => {
  const currentVersion = "3.2.2";
  const { last_date: lastDate, version } = banner;
  const versionList = useVersionList();

  if (version === currentVersion) {
    return { noDays: "0", noVersions: "0" };
  }

  const noVersion =
    version && version !== null
      ? (versionList.indexOf(version) as unknown as string)
      : "";
  const noDays =
    lastDate && lastDate !== null
      ? formatDistanceToNowStrict(parseISO(lastDate), {
          addSuffix: true,
          unit: "day",
        })
      : "";
  return { noDays, noVersions: noVersion };
};

export default GetFromLastBanner;
