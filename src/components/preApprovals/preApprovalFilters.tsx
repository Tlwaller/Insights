import React, { useEffect, useRef, useState } from "react";
import { SnapInput } from "../../suit";
import { useDebounce } from "../../hooks/useDebounce";

interface PreApprovedFiltersProps {
  onFiltersApplied: (
    preApprSearch: string,
  ) => void;
}

const PreApprovedFilters: React.FC<PreApprovedFiltersProps> = ({
  onFiltersApplied = () => {},
}) => {
  const [preApprSearch, setpreApprSearch] = useState<string>("");
  const debouncedPreApprSearch: string = useDebounce(preApprSearch, 500);

  const ref = useRef<HTMLSnapInputElement>(null);

  useEffect(() => {
    onFiltersApplied(
        debouncedPreApprSearch,
    );
    /*eslint-disable*/
  }, [
    debouncedPreApprSearch,
  ]); /*eslint-enable*/

  return (
    <>
      <SnapInput
        _id="search-preApproval-field"
        _type="text"
        placeholder="Search Pre-Approval Contacts..."
        icon="search-line"
        icon-position="left"
        className="grow"
        value={preApprSearch}
        ref={ref}
        onInput={(e) => {
            setpreApprSearch((e.target as HTMLInputElement).value);
        }}
      />
    </>
  );
};

export default PreApprovedFilters;
