import classNames from "classnames";
import React from "react";
import {
  ReportCardData,
  ReportCardStructure,
} from "../reports/cardstructure/CardStructureTypes";
import { JSXUtils } from "../../utils/JSXUtils";

interface PreApprovalResultsCardProps {
  cardStructure: ReportCardStructure;
  entity: any;
  className?: string;
  index?: number;
  district?: boolean;
  status?: string;
}

const PreApprovalResultsCard: React.FC<PreApprovalResultsCardProps> = ({
  cardStructure,
  entity,
  className = "",
  index,
  district = false,
  status,
}) => {
  let last: boolean;

  const renderTitle = () => {
    if (cardStructure.title.key) {
      return entity[cardStructure.title.key] + " " + entity.lastName ;
    } else if (cardStructure.title.value) {
      return cardStructure.title.value;
    } else {
      return "No title";
    }
  };

  const renderProperty = (
    data: ReportCardData,
    last: boolean,
    index: number | string
  ) => {
    const key = data.key || "";
    return (
      <div
        className={classNames(
          "flex",
          { "mb-2": !last },
          { "flex-col": data.layout === "1-col" },
          { "flex-row justify-between items-center": data.layout === "2-col" }
        )}
        key={index}
      >
        <label
          className={classNames("text-xs font-bold text-gray-500", {
            "mb-1": data.layout === "1-col",
          })}
        >
          {data.label}
        </label>
        {data.renderValue ? (
          <>
            {data.renderValueNode ? (
              <span className="text-sm font-semibold text-gray-800">
                {data.renderValue({ value: entity[key], entity: entity })}
              </span>
            ) : (
              <>{data.renderValue({ value: entity[key], entity: entity })}</>
            )}
          </>
        ) : (
          <span className="text-sm font-semibold text-gray-800">
            {entity[key]}
          </span>
        )}
      </div>
    );
  };

  const renderDivider = (last: boolean, index: number | string) => {
    return (
      <div className={classNames({ "mb-2": !last })} key={index}>
        <div className="w-full h-px bg-gray-200"></div>
      </div>
    );
  };

  return (
    <div
      key={index}
      className={`bg-white border-gray-200 rounded-md border p-4 shadow-sm ${className}`}
    >
      <div className="flex flex-row justify-between">
        <h6 className="text-base font-semibold text-gray-800 mb-2">
          {renderTitle()}
        </h6>
        {district? <></> : JSXUtils.getPreApprovalItemActions(entity.status, entity.callback)}
      </div>
      {renderDivider(false, "fd")}
      {cardStructure.dataList.map((data, index) => {
        last = index === cardStructure.dataList.length - 1;
        if (data.type === "divider") {
          return renderDivider(last, index);
        } else {
          return renderProperty(data, last, index);
        }
      })}
    </div>
  );
};

export default PreApprovalResultsCard;
