import cx from "classnames";
import { config } from "config";
import { kebabCase } from "lodash";

type MaterialItemProps = {
  className?: string;
  item: string;
  quantity: number;
  rarity: number;
};

const MaterialItem = ({
  className,
  item,
  quantity,
  rarity,
}: MaterialItemProps) => {
  const { baseUrl } = config;
  const link = `https://genshin-impact.fandom.com/wiki/${item.replace(
    / /g,
    "_",
  )}`;
  const imageName = `${baseUrl}materials/${kebabCase(
    item.replace(/'/g, "-"),
  )}.png`;
  return (
    <div
      className={cx(
        "flex flex-col w-16 md:w-20 h-min items-center m-[1px] rounded hover:border-2 hover:border-[#ebe7df] hover:border-solid",
        {
          "bg-rarity-1": rarity === 1 || rarity === 0,
          "bg-rarity-2": rarity === 2,
          "bg-rarity-3": rarity === 3,
          "bg-rarity-4": rarity === 4,
          "bg-rarity-5": rarity === 5,
        },
        className,
      )}
    >
      <a className="flex-none" href={link} rel="noopener" target="_blank">
        <img alt={item} className={cx("pb-1")} loading="lazy" src={imageName} />
        <div
          className={cx(
            "flex bg-[#e4c179] justify-center items-center px-1 py-2 text-xs font-bold md:text-sm text-slate-600",
            {
              "text-xs font-medium md:font-bold": quantity > 1000000,
            },
          )}
        >
          {quantity.toLocaleString()}
        </div>
      </a>
    </div>
  );
};

export default MaterialItem;
