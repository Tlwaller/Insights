import { useEffect, useState } from "react";
import { SnapButton, SnapLink, SnapModal, SnapModalFooter } from "../../suit";
import {
  preApprovalDistrictToPrintData,
  printPreApprovalDistrictHeaders,
} from "../../utils/PrintUtils";
import { PreApprovalDistrictCard } from "../preApprovals/cardStructure/PreApprovalCard";
import PreApprovalResults from "../preApprovals/preApprovalResults";
import { PreApprovalItemInterface } from "../preApprovals/preApprovalsSwitch";
import PreApprovalsDistrictTableHeader from "../preApprovals/tableHeaders/PreApprovalsDistrictTableHeader";

interface ItemListProps {
  showModal?: boolean;
  onClose: () => void;
  schoolTitle?: string;
  schoolId: string | number;
  description?: string;
  approvalContacts: PreApprovalItemInterface[];
  district?: boolean;
  index?: number;
}

const ItemModal: React.FC<ItemListProps> = ({
  approvalContacts,
  showModal,
  schoolTitle,
  schoolId,
  district = true,
  index,
  onClose,
}) => {
  const [preApprovalsFiltered, setPreApprovalsFiltered] = useState<
    PreApprovalItemInterface[]
  >([]);
  const [tableDataLoaded, setTableDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (approvalContacts) {
      setPreApprovalsFiltered(approvalContacts);
      setTableDataLoaded(true);
    }
  }, [approvalContacts]); //eslint-disable-line

  const dashboardUrl = () => {
    return "/dashboards/" + schoolId + "/preapprovals";
  };

  return (
    <>
      <SnapModal
        title="Pre-Approved Contacts"
        className={!showModal ? "hidden" : ""}
        onSnap-modal-close={onClose}
      >
        <div className="col-span-3 pb-4 px-4">
          {preApprovalsFiltered.length === 0? (
            <>
              <p className="py-5 font-medium text-lg leading-5">
                {schoolTitle}
              </p>
            </>
          ) : (
            <>
              <p className="py-5 font-medium text-lg leading-5">
                {schoolTitle}
              </p>
              { preApprovalsFiltered.length > 0 ? (
                <SnapLink
                  text="Visit Dashboard to Send Pre-Approvals"
                  href={dashboardUrl()}
                  srOnly="srOnly"
                />
              ) : null}
            </>
          )}
          <PreApprovalResults
            section="PreApprovals"
            title={
              preApprovalsFiltered.length !== 0 ? "Pre-Approved Contacts" : ""
            }
            isDistrict={district}
            tableColumns={district ? PreApprovalsDistrictTableHeader() : []}
            cardStructure={PreApprovalDistrictCard}
            reportData={preApprovalsFiltered}
            printHeaders={printPreApprovalDistrictHeaders}
            printData={preApprovalDistrictToPrintData(preApprovalsFiltered)}
            tableDataLoaded={tableDataLoaded}
            index={index}
            schoolId={schoolId}
          />
        </div>
        <SnapModalFooter
          className={`${
            preApprovalsFiltered.length === 0 ? "" : "hidden"
          } sticky -bottom-`}
          slot="footer"
        >
          <SnapButton
            className="px-2 py-4"
            fullWidth
            size="md"
            variant="tertiary"
            onClick={onClose}
          >
            Close
          </SnapButton>
        </SnapModalFooter>
      </SnapModal>
    </>
  );
};

export default ItemModal;
