import VersionFromLastBanner from "../../../utils/fromLastBanner";

const Page = () => {
  const abc = VersionFromLastBanner({
    "last_date": "2022-10-14",
    "version": "3.1.2"
  });
  return (<div>{abc}</div>)
};

export default Page;
