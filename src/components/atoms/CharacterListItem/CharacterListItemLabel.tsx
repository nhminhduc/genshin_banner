import cx from "classnames";
import { startCase } from "lodash";

interface CharacterListItemLabelProps {
  name: string;
  noVersions?: number;
}

const CharacterListItemLabel = ({
  name,
  noVersions,
}: CharacterListItemLabelProps) => (
  <div
    className={cx(
      "flex bg-[#e4c179] left-0 right-0 bottom-0 justify-between items-center h-8 px-1 py-2",
    )}
  >
    <div
      className={cx(
        "font-bold text-sm text-slate-600 md:group-hover:text-rose-600",
      )}
    >
      {startCase(name)}
    </div>
    {(noVersions || noVersions === 0) && (
      <div
        className={cx("font-bold text-xl", {
          "text-lime-700": noVersions === 0,
          "text-yellow-400": noVersions <= 3,
          "text-rose-700": noVersions > 3 && noVersions < 10,
          "text-rose-900": noVersions >= 10,
        })}
      >
        {noVersions}
      </div>
    )}
  </div>
);

export default CharacterListItemLabel;
