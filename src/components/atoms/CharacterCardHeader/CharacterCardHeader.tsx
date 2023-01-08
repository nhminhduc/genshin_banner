import LinkIcon from "assets/images/LinkIcon";
import StarIcon from "assets/images/StarIcon";
import cx from "classnames";
import { config } from "config";
import { startCase } from "lodash";
import type { CharacterData } from "types/CharacterType";

type CharacterCardHeaderProps = {
  className?: string;
  character: CharacterData;
};

const CharacterCardHeader = ({
  className,
  character
}: CharacterCardHeaderProps) => {
  const { baseUrl } = config;

  const {
    link,
    name,
    rarity,
    vision_key: visionKey,
    fromLastBanner,
  } = character;

  const { noDays, noVersions } = fromLastBanner;

  const renderRarity = () => {
    const stars = [];
    for (let i = 0; i < Number(rarity); i += 1) {
      stars.push(<StarIcon className="h-4 w-4 md:h-6 md:w-6" key={i} />);
    }
    return stars;
  };

  return (
    <div className="flex w-full justify-start">
      <div
        className={cx(
          "relative rounded border-2 border-[#ebe7df] border-solid flex flex-col items-center",
          {
            "bg-[#9470bb]": rarity === "4",
            "bg-[#c87c24]": rarity === "5",
          },
          className,
        )}
      >
        <img
          alt={name}
          className={cx("m:w-36 m:h-40")}
          loading="lazy"
          src={`${baseUrl}characters/${name}/icon-big.png`}
        />
        <span className="absolute right-0">
          <img
            alt={visionKey}
            className="w-10 h-10"
            src={`${baseUrl}elements/${visionKey}/icon.png`}
          />
        </span>
      </div>
      <div className="flex-auto ml-4 flex flex-col">
        <h1 className="text-3xl font-bold text-stone-200">{startCase(name)}</h1>
        <div className="flex my-2">{renderRarity()}</div>
        {noVersions !== undefined && noDays !== undefined ?
          <div className={cx("text-xl font-bold my-4", {
            "text-lime-700": noVersions === 0,
            "text-yellow-400": noVersions <= 3,
            "text-rose-700": noVersions > 3 && noVersions < 10,
            "text-rose-900": noVersions >= 10,
          })}>
            <p>
              {noVersions === 0 ? "Current banner." : `${noVersions} patches from last banner.`}
              <br />
              {noDays === 0 ? null : `${noDays} from last banner.`}
            </p>
          </div>
          : null
        }
      </div>
      <div />
      <a className="justify-self-end" href={link}>
        <LinkIcon className="h-6 w-6" />
      </a>
    </div>
  );
};

export default CharacterCardHeader;
