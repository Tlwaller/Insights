export interface PreApprovalNonDistrictData {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    activity: number;
    sentOn: Date | null;
    status: string;
    actions: object | null;
  }
  
  export interface PreApprovalDistrictData {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    activity: number;
    sentOn: Date | null;
    status: string;
  }