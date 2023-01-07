import Star from "assets/images/Star";
import cx from "classnames";
import CharacterListItemLabel from "components/atoms/CharacterListItem/CharacterListItemLabel";
import { config } from "config";
import type { CharacterData } from "types/CharacterType";

export type CharacterCardProps = {
  character: CharacterData;
  className?: string;
};
const CharacterCard = ({ character, className }: CharacterCardProps) => {
  const { baseUrl } = config;
  const { fromLastBanner, name, rarity, vision_key: visionKey } = character;
  const renderRarity = () => {
    const stars = [];
    for (let i = 0; i < Number(rarity); i += 1) {
      stars.push(<Star className="h-4 w-4 md:h-6 md:w-6" key={i} />);
    }
    return stars;
  };

  return (
    <div
      className={cx(
        className,
        "2xl:ml-4 2xl:w-full 2xl:h-1/2 2xl:flex bg-[#994c4c]/25",
        {
          "bg-[#9470bb]": rarity === "4",
          "bg-[#c87c24]": rarity === "5",
        },
      )}
    >
      <div className="bg-[#994c4c] relative rounded border-2 border-[#ebe7df] border-solid flex flex-col items-center	">
        <img
          alt={name}
          className={cx("w-36 h-36")}
          loading="lazy"
          src={`${baseUrl}/characters/${name}/icon-big.png`}
        />
        <div className="flex absolute bottom-0">{renderRarity()}</div>
        <span className="absolute right-0">
          <img
            alt={visionKey}
            className="w-10 h-10"
            src={`${baseUrl}/elements/${visionKey}/icon.png`}
          />
        </span>
      </div>
      <CharacterListItemLabel
        name={name}
        noVersions={fromLastBanner.noVersions}
      />
    </div>
  );
};

export default CharacterCard;
