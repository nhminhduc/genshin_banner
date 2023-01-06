import { elements } from "assets/images";
import Star from "assets/images/Star";
import cx from "classnames";
import CharacterListItemLabel from "components/atoms/CharacterListItem/CharacterListItemLabel";
import type { CharacterData } from "types/CharacterType";

export type CharacterCardProps = {
  character: CharacterData;
  className?: string;
};
const CharacterCard = ({ character, className }: CharacterCardProps) => {
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
      )}
    >
      <div className="bg-[#994c4c] relative rounded border-2 border-[#ebe7df] border-solid flex flex-col items-center	">
        <img
          alt={name}
          className={cx("w-36 h-36")}
          loading="lazy"
          src={`characters/${name}/icon-big.webp`}
        />
        <div className="flex absolute bottom-0">{renderRarity()}</div>
        <span className="absolute right-0">
          <img
            alt={visionKey}
            className="w-10 h-10"
            src={elements[visionKey as keyof typeof elements]}
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
