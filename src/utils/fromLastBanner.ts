import { formatDistanceToNowStrict, parseISO } from "date-fns";
import useVersionList from "hooks/useVersionList";
import { Banner, FromLastBanner } from "types/CharacterType";

const GetFromLastBanner = (banner: Banner): FromLastBanner => {
  const { last_date: lastDate, version } = banner;
  const versionList = useVersionList();

  if (version === versionList[0]) {
    return { noDays: 0, noVersions: 0 };
  }

  const noVersion =
    version && version !== null
      ? (versionList.indexOf(version) as unknown as number)
      : undefined;
  const noDays =
    lastDate && lastDate !== null
      ? (formatDistanceToNowStrict(parseISO(lastDate), {
          addSuffix: false,
          unit: "day",
        }) as unknown as number)
      : undefined;
  return { noDays, noVersions: noVersion };
};

export default GetFromLastBanner;
