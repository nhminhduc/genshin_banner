import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import cx from "classnames";
import React, { useState } from "react";

type FoldableSectionProps = {
  children: React.ReactNode;
  className?: string;
  contentClass?: string;
  expanded?: boolean;
  title: string;
  titleClass?: string;
};
const FoldableSection = ({
  children,
  className,
  contentClass,
  expanded = false,
  title,
  titleClass,
}: FoldableSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const Icon = isExpanded ? (
    <ChevronDownIcon className="h-6 w-6 text-stone-100" />
  ) : (
    <ChevronUpIcon className="h-6 w-6 text-stone-100" />
  );

  return (
    <div className={cx("flex flex-col", className)}>
      <button
        className="flex w-full justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
        type="button"
      >
        <h3 className={cx("justify-self-start", titleClass)}>{title}</h3>
        {Icon}
      </button>
      {isExpanded && <div className={contentClass}>{children}</div>}
    </div>
  );
};

export default FoldableSection;
