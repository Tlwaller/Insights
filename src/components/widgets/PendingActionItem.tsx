import React from "react";
import { SnapLink } from "../../suit";
import RoundedIconWithIndicator from "../RoundedIconWithIndicator";
import { PendingAction } from "./PendingActionTypes";
import RoundedIcon from "../RoundedIcon";

interface PendingActionItemProps {
  action: PendingAction;
  className?: string;
  ctaCallback?: () => void;
}

interface PendingActionColorVariable {
  name: "gray" | "white" | "red" | "yellow" | "blue";
  hex: string;
  bg: string;
  linkVariant: "warning" | "danger" | "default" | "success";
}

const PendingActionItem: React.FC<PendingActionItemProps> = ({
  action,
  className = "",
  ctaCallback = () => {},
}) => {
  const getColorVariables = (): PendingActionColorVariable => {
    switch (action.color) {
      case "yellow":
        return {
          hex: "#D97706",
          name: "yellow",
          bg: "bg-yellow-100",
          linkVariant: "warning",
        };
      case "blue":
        return {
          hex: "#3B82F6",
          name: "blue",
          bg: "bg-blue-100",
          linkVariant: "default",
        };
      case "red":
      default:
        return {
          hex: "#DC2626",
          name: "red",
          bg: "bg-red-100",
          linkVariant: "danger",
        };
    }
  };

  const colorVariable = getColorVariables();

  return (
    <div className={`flex flex-row ${className} pb-4`}>
      {action.count ? (
        <RoundedIconWithIndicator
          icon={action.icon}
          count={action.count}
          colorName={colorVariable.name}
          hex={colorVariable.hex}
          bg={colorVariable.bg}
        />
      ) : (
        <RoundedIcon
          icon={action.icon}
          colorName={colorVariable.name}
          hex={colorVariable.hex}
          bg={colorVariable.bg}
        />
      )}
      <div className="flex flex-col ml-4">
        <h6 className="text-sm font-bold text-gray-800 pb-1">{action.name}</h6>
        <p className="text-xs font-normal text-gray-500 pb-1">
          {action.description}
        </p>
        <SnapLink
          text={action.cta}
          onClick={ctaCallback}
          size="sm"
          variant={colorVariable.linkVariant}
        />
      </div>
    </div>
  );
};

export default PendingActionItem;
