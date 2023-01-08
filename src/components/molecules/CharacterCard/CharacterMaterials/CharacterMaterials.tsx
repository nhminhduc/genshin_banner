import cx from "classnames";
import FoldableSection from "components/atoms/FoldableSection/FoldableSection";
import MaterialItem from "components/atoms/MaterialItem/MaterialItem";
import type { Material } from "types/CharacterType";

type CharacterMaterialsProps = {
  className?: string;
  materials: Material[];
  title: string;
};

const CharacterMaterials = ({
  className,
  materials,
  title,
}: CharacterMaterialsProps) => (
  <FoldableSection
    className={cx("py-3", className)}
    contentClass="flex flex-wrap"
    expanded={true}
    title={title}
    titleClass="text-base md:text-xl md:font-bold text-stone-200 mb-2"
  >
    {materials.map((material) => {
      const { item, quantity, rarity } = material;
      return (
        <MaterialItem
          item={item}
          key={item}
          quantity={quantity}
          rarity={rarity}
        />
      );
    })}
  </FoldableSection>
);

export default CharacterMaterials;
