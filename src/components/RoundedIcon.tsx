import { ICON_TYPES } from "@snap-mobile/snap-ui/dist/types/utils";
import React from "react";
import { SnapIcon } from "../suit";

interface RoundedIconProps {
  icon: string;
  colorName: "gray" | "white" | "red" | "yellow" | "blue";
  hex: string;
  bg: string;
  className?: string;
}

const RoundedIcon: React.FC<RoundedIconProps> = ({
  icon,
  hex,
  bg,
  className,
}) => {
  return (
    <div
      className={`relative flex min-w-[36px] w-9 h-9 rounded-[18px] items-center justify-center shadow ${bg} ${className}`}
    >
      <SnapIcon icon={icon as ICON_TYPES} size="md" color={hex} />
    </div>
  );
};

export default RoundedIcon;
