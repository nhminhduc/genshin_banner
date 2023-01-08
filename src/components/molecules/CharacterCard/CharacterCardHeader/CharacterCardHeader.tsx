import LinkIcon from "assets/images/LinkIcon";
import StarIcon from "assets/images/StarIcon";
import cx from "classnames";
import { config } from "config";
import { startCase } from "lodash";
import type { CharacterData } from "types/CharacterType";

type CharacterCardHeaderProps = {
  character: CharacterData;
  className?: string;
};

const CharacterCardHeader = ({
  character,
  className,
}: CharacterCardHeaderProps) => {
  const { baseUrl } = config;

  const {
    fromLastBanner,
    link,
    name,
    rarity,
    vision_key: visionKey,
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
          "relative rounded border-2 border-[#ebe7df] border-solid w-36 h-40 flex-none self-center",
          {
            "bg-[#9470bb]": rarity === "4",
            "bg-[#c87c24]": rarity === "5",
          },
          className,
        )}
      >
        <img
          alt={name}
          className={cx("w-36 h-40 pb-1")}
          loading="lazy"
          src={`${baseUrl}characters/${name}/icon-big.png`}
        />
        <span className="absolute right-0 top-0">
          <img
            alt={visionKey}
            className="w-10 h-10"
            src={`${baseUrl}elements/${visionKey}.png`}
          />
        </span>
      </div>
      <div className="flex-auto ml-4 flex flex-col">
        <h1 className="text-3xl font-bold text-stone-200">{startCase(name)}</h1>
        <div className="flex my-2">{renderRarity()}</div>
        {noVersions !== undefined && noDays !== undefined ? (
          <div
            className={cx("text-l font-bold mt-2", {
              "text-blue-500": noVersions === 0,
              "text-yellow-400": noVersions <= 3,
              "text-rose-700": noVersions > 3 && noVersions < 10,
              "text-rose-900": noVersions >= 10,
            })}
          >
            {noVersions === 0 ? (
              <p>Current banner.</p>
            ) : (
              <p>
                From last banner:
                <br />
                {noVersions} patches.
                <br />
                {noDays}.
              </p>
            )}
          </div>
        ) : null}
      </div>
      <div />
      <a
        className="justify-self-end h-fit"
        href={link}
        rel="noopener"
        target="_blank"
      >
        <LinkIcon className="h-6 w-6" />
      </a>
    </div>
  );
};

export default CharacterCardHeader;