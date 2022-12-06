import cx from "classnames";
import { startCase } from "lodash";

interface CharacterListItemLabelProps {
  noVersions: string;
  name: string;
}

const CharacterListItemLabel = ({
  noVersions,
  name,
}: CharacterListItemLabelProps) => (
  <div
    className={cx(
      "flex bg-[#e4c179] left-0 right-0 bottom-0 justify-between items-center h-8 px-1 py-2",
    )}
  >
    <div
      className={cx("font-bold text-xl", {
        "text-green-600": Number(noVersions) === 0,
        "text-lime-300": Number(noVersions) <= 3,
        "text-rose-600": Number(noVersions) > 3 && Number(noVersions) < 10,
        "text-rose-900": Number(noVersions) >= 10,
      })}
    >
      {noVersions}
    </div>
    <div className={cx("font-bold text-sm text-[#1a1d23]")}>{startCase(name)}</div>
  </div>
);

export default CharacterListItemLabel;
