import { SnapIcon } from "../../suit";
import React, { useContext, useEffect, useState } from "react";
import { AppContext, DistrictPreApprovalsIndex } from "../../AppGlobalState";
import { isScreenSizeBelow } from "../../utils/UIUtils";
import { orgPreApprovalsToTableData } from "./preApprovalsSwitch";
import WhiteCard from "../WhiteCard";
import { InsPreApprovedContact, Org } from "../../graphql/generated";
import ItemModal from "../modals/ItemModal";
import { LoadingData } from "../loading-empty-state/LoadingData";
import PreApprovalDistrictChart from "./preApprovalDistrictChart";
import PreApprovalDistrictFilters from "./preApprovalDistrictFilters";
import { NoPreApproved } from "../loading-empty-state/NoPreApprovedContact";
import { isPreApprovalInviteUndeliverable } from "../../data-helpers/PreapprovalsDataHelper";

interface PreApprovalDistrictProps {
  groupedApprovalContacts: DistrictPreApprovalsIndex;
  districtSchools: Org[];
  district: boolean;
}

const PreApprovalDistrict: React.FC<PreApprovalDistrictProps> = ({
  groupedApprovalContacts,
  districtSchools,
  district,
}) => {
  const {appState} = useContext(AppContext);
  const [showTable, setShowTable] = useState<boolean[]>([]);
  const [filteredDistrictSchools, setFilteredDistrictSchools] = useState<Org[]>([]);
  const initialModalStates = filteredDistrictSchools.map(() => false);
  const [searchResults, setSearchResults] = useState<boolean>(false);
  const [modalStates, setModalStates] = useState(initialModalStates);

  const togglePreApprovalItems = (index: number) => {
    const newShowTable = Array(districtSchools.length).fill(false);
    newShowTable[index] = !showTable[index];
    setShowTable(newShowTable);
  };

  const openPreApprovalModal = (index: number) => {
    const newModalStates = [...modalStates];
    newModalStates[index] = true;
    setModalStates(newModalStates);
  };

  const closeModal = (index: number) => {
    const newModalStates = [...modalStates];
    newModalStates[index] = false;
    setModalStates(newModalStates);
  };

  const filterTableData = (
    allDistricts: Org[],
    preApprSearch: string
  ): Org[] => {
    return allDistricts.filter((district) => {
      //filter name
      if (preApprSearch.length > 0) {
        const passName = String(district.name)
          .toLowerCase()
          .includes(preApprSearch.toLowerCase());
        if (!passName) {
          return false;
        }
      }
      return true;
    });
  };

  useEffect(() => {
    if (districtSchools) {
      setFilteredDistrictSchools(districtSchools)
      //TODO reset filters
    }
  }, [districtSchools]); //eslint-disable-line

  const filtersApplied = (preApprSearch: string) => {
    if (!appState.orgsLoading && districtSchools.length > 0) {
      const filteredData = filterTableData(districtSchools, preApprSearch);
      if(preApprSearch.length > 0){
        setSearchResults(true);
      }else{
        setSearchResults(false);
      }
      setFilteredDistrictSchools(filteredData)
    }
  };

  const getSchoolContacts = (schoolId: string): InsPreApprovedContact[] => {
    return groupedApprovalContacts[schoolId] || [];
  }

  const getSchoolHeaderData = (schoolId: string) => {
    const schoolContacts = groupedApprovalContacts[schoolId] || null;
    if (schoolContacts) {
      const undeliverable = schoolContacts.filter((contact) => isPreApprovalInviteUndeliverable(contact.invite_status || ''));
      return {
        inviteCount: schoolContacts.length,
        undeliverableCount: undeliverable.length,
        undeliverableColor: undeliverable.length > 0 ? 'text-red-500' : 'text-gray-500',
      };
    }
    return {
      inviteCount: 0,
      undeliverableCount: 0,
      undeliverableColor: 'text-gray-500',
    };
  };

  const buildSchoolsAffiliatesDataForDisplay = (schoolsAffiliates:Org[]) => {
    const displaySchoolsAffiliates = schoolsAffiliates.map((schoolAffiliate) => {
      //TODO define this type
      return {
        schoolAffiliate: schoolAffiliate,
        headerData: getSchoolHeaderData(schoolAffiliate.id),
        contacts: getSchoolContacts(schoolAffiliate.id),
      };
    });
    return displaySchoolsAffiliates.sort(( a, b ) => {
      if ( a.headerData.inviteCount > b.headerData.inviteCount ){
        return -1;
      }
      if ( a.headerData.inviteCount < b.headerData.inviteCount ){
        return 1;
      }

      if ( (a.schoolAffiliate.name || '') < (b.schoolAffiliate.name || '') ){
        return -1;
      }
      if ( (a.schoolAffiliate.name || '') > (b.schoolAffiliate.name || '') ){
        return 1;
      }

      return 0;
    });
  };

  if (appState.orgsLoading) {
    return <LoadingData className="h-screen" />;
  } else
    return (
      <>
      <PreApprovalDistrictFilters onFiltersApplied={filtersApplied} />
      <p className="font-medium leading-7 text-lg py-4 pl-1">Pre-Approved Contacts</p>
        {filteredDistrictSchools.length === 0? <NoPreApproved searchResults={searchResults}/> :isScreenSizeBelow(appState.windowSize.screen, "sm") ? (
          <>
            {buildSchoolsAffiliatesDataForDisplay(filteredDistrictSchools).map((item, index) => {
              return (
                <WhiteCard key={index} className="grid grid-cols-6 mb-3">
                  <div className="col-span-5">
                    <p
                      className="text-base text-left font-sans font-bold leading-6"
                      style={{ color: "#2563EB" }}
                    >
                      {item.schoolAffiliate.name}
                    </p>
                  </div>
                  <div className="col-span-1 text-right">
                    <SnapIcon
                      color="#2563EB"
                      icon={`arrow-right-solid`}
                      size="md"
                      onClick={() => {
                        openPreApprovalModal(index);
                      }}
                    />
                  </div>
                  <div className="col-span-6">
                    <hr></hr>
                  </div>
                  <div className="col-span-5 text-left font-semibold pt-3">
                    <p className="text-gray-500">Undeliverable</p>
                  </div>
                  <div className="col-span-1 text-right font-semibold pt-3">
                    <p className={item.headerData.undeliverableColor}>{item.headerData.undeliverableCount}</p>
                  </div>
                  <div className="col-span-5 text-left font-semibold pt-3">
                    <p className="text-gray-500">Invites</p>
                  </div>
                  <div className="col-span-1 text-right font-semibold pt-3">
                    <p>{item.headerData.inviteCount}</p>
                  </div>
                  {modalStates[index]?
                  <>
                    <ItemModal
                    showModal={modalStates[index]}
                    approvalContacts={orgPreApprovalsToTableData(item.contacts, (type:string, contactId:number) => {})}
                    schoolTitle={item.schoolAffiliate.name as string}
                    schoolId={item.schoolAffiliate.id}
                    district={district}
                    onClose={() => closeModal(index)}
                    index={index}
                    />
                  </> : null}
                </WhiteCard>
              )
            })}
          </>
        ) : (
          //Desktop Version
          <>
            {buildSchoolsAffiliatesDataForDisplay(filteredDistrictSchools).map((item, index) => {
              return (
                <WhiteCard key={index} className="grid grid-cols-12 my-3">
                  <div className="col-span-4">
                    <p className="text-base text-left font-sans font-medium leading-6">
                      {item.schoolAffiliate.name}
                    </p>
                  </div>
                  <div className="col-span-4 text-right font-semibold">
                    <div className="flex flex-row justify-end">
                      <div className="flex flex-col">
                        <p className="text-gray-500">Undeliverable</p>
                        <p className={item.headerData.undeliverableColor}>{item.headerData.undeliverableCount}</p>
                      </div>
                      <div className="flex flex-col ml-3">
                        <div
                          className="h-10 w-0.5 sm:block font-semibold "
                          style={{ backgroundColor: "#E2E8F0" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 justify-end text-right font-semibold">
                    <div className="flex flex-row justify-end">
                      <div className="flex flex-col">
                        <p className="text-gray-500">Invites</p>
                        <p>{item.headerData.inviteCount}</p>
                      </div>
                      <div className="flex flex-col ml-3">
                        <div
                          className="h-10 w-0.5 sm:block font-semibold "
                          style={{ backgroundColor: "#E2E8F0" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 justify-end text-right">
                    <SnapIcon
                      icon={`${
                        showTable[index] ? "chevron-up-line" : "chevron-down-line"
                      }`}
                      className="py-1 px-1"
                      style={{
                        backgroundColor: "#BFDBFE",
                        borderRadius: "50%",
                        borderOutline: "blue",
                        border: "1px solid blue",
                      }}
                      size="md"
                      onClick={() => {
                        togglePreApprovalItems(index);
                      }}
                    />
                  </div>
                  <div
                    className={`col-span-12 ${showTable[index] ? "" : " hidden"}`}
                  >
                    {item.contacts.length > 0?(
                      <PreApprovalDistrictChart
                        district={district}
                        approvalContacts={orgPreApprovalsToTableData(item.contacts, (type:string, contactId:number) => {})}
                        schoolId={item.schoolAffiliate.id}
                      />
                    ) :(<NoPreApproved isDistrict={true} schoolId={item.schoolAffiliate.id}/>)}
                  </div>
                </WhiteCard>
              )
            })}
          </>
        )}
        
      </>
    );
};

export default PreApprovalDistrict;
