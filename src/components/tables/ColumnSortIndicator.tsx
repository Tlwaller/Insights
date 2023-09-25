import React from "react";
import classNames from "classnames";
import { SnapIcon } from "../../suit";

interface ColumnSortIndicatorProps {
  sort: string | boolean;
  className?: string;
}

const ColumnSortIndicator: React.FC<ColumnSortIndicatorProps> = ({
  sort,
  className = "",
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {sort === false ? (
        <>
          <SnapIcon
            icon="chevron-up-line"
            size="tiny"
            className="text-gray-500"
          />
          <SnapIcon
            icon="chevron-down-line"
            size="tiny"
            className="text-gray-500"
          />
        </>
      ) : (
        <>
          <SnapIcon
            icon="chevron-up-line"
            size="tiny"
            className={classNames({
              "text-gray-500": sort !== "asc",
              "text-blue-800": sort === "asc",
              hidden: sort === "desc",
            })}
          />
          <SnapIcon
            icon="chevron-down-line"
            size="tiny"
            className={classNames({
              "text-gray-500": sort !== "desc",
              "text-blue-800": sort === "desc",
              hidden: sort === "asc",
            })}
          />
        </>
      )}
    </div>
  );
};

export default ColumnSortIndicator;
