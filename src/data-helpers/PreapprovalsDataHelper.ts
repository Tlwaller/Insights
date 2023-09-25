import { DistrictPreApprovalsIndex } from "../AppGlobalState";
import { ErrorCheckingInputs } from "../components/modals/EditPreApprovalContactModal"
import { InsPreApprovedContact } from "../graphql/generated";

export const groupPreApprovalsByAssociatedOrg = (contacts:InsPreApprovedContact[]): DistrictPreApprovalsIndex => {
  return contacts.reduce((groups:any, item) => {
    const groupName = item.associated_org_id || 'unknown';
    const group = groups[groupName] || [];
    group.push(item);
    groups[groupName] = group;
    return groups;
  }, {});
};

export const isPreApprovalInviteUndeliverable = (status:string): boolean => {
  return ['bounce', 'deferred', 'dropped'].indexOf(status) >= 0;
};

export const updatePreApprovalContact = ( listOfContacts: InsPreApprovedContact[], updatedContact: ErrorCheckingInputs, contactId: number, emailChanged?: boolean): InsPreApprovedContact[]  => {
  return listOfContacts.map(contact =>{
    if(contact.id === contactId){
      return {
        ...contact,
        first_name: updatedContact.firstName,
        last_name: updatedContact.lastName,
        activity: updatedContact.activity,
        email: updatedContact.email,
        invite_status: emailChanged ? "created" : contact.invite_status
      }
    } else {
      return contact
    }
  });
}

export const updateReSendStatus = (listOfContacts: InsPreApprovedContact[], contactId: number): InsPreApprovedContact[] => {
  return listOfContacts.map(contact => {
    if(contact.id === contactId){
      return {...contact,
      invite_status: 're-sent'
    }
    }else {
      return contact
    }
  })
}

export const deletePreApprovedContact = (listOfContacts: InsPreApprovedContact[], contactId: number): InsPreApprovedContact[] => {
  return listOfContacts.filter(contact => contact.id !== contactId);
}

export const getPreApprovalContactId = (listOfContacts:InsPreApprovedContact[], contactEmail: string): number => {
  return listOfContacts.filter(contact => contact.email === contactEmail).map(contact => contact.id as number)[0];
}

