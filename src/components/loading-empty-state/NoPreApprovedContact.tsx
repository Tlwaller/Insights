import React from 'react';
import NoPreApprovedContacts from '../../assets/NoPreApprovedContacts.png';
import { SnapLink } from '../../suit';

interface NoPreApprovedProps {
    searchResults?: boolean,
    isDistrict?: boolean,
    schoolId?: string
}

export const NoPreApproved: React.FC<NoPreApprovedProps> = ({searchResults = false, isDistrict = false, schoolId = ""}) => {
    const noContactsDesc = "You'll be able to see information about your Pre-Approval Contacts here."
    const noContactsTitle = "No Pre-Approval Contacts to Show Yet"
    const searchEmptyDesc = "Try adjusting your search inquiry and try again."
    const searchEmptyTitle = "Sorry, No Results Were Found."
    const dashboardUrl = () => {
        return '/dashboards/' + schoolId + '/preapprovals';
      };
    return (
        <div className='flex flex-row justify-center'>
            <div className='flex flex-col items-center justify-center pt-20 pb-20 w-96 justify-items-center'>
                <img src={NoPreApprovedContacts} alt="No results" className='w-full'/>
                <h3 className='font-semibold text-lg pb-4'>{searchResults ? searchEmptyTitle : noContactsTitle}</h3>
                {!isDistrict?
                <p className={`text-center text-gray-800`}>{searchResults ? searchEmptyDesc : noContactsDesc}</p>
                :
                <SnapLink text="Visit Dashboard to Send Pre-Approvals" href={dashboardUrl()} srOnly="srOnly"/>
                }
            </div>
        </div>
    )
}
