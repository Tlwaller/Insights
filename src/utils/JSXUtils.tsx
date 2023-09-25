import { SnapDropdown, SnapIcon, SnapLink } from "../suit";
import { getFundraiserPageUrl } from "./RouteUtils";
import { itemList } from "../components/preApprovals/itemList";
import { isScreenSizeBelow } from "./UIUtils";
import { AppContext } from "../AppGlobalState";
import { useContext } from "react";
import { isPreApprovalInviteUndeliverable } from "../data-helpers/PreapprovalsDataHelper";
import { PreApprovedContactsActivityTypes } from "../constants/preApprovedContactsActivityTypes";
export abstract class JSXUtils {
  public static displayCampaignsStatusLabel = (value: string) : React.ReactNode => {
    switch(value) {
      case 'active':
        return (<div className="inline-block text-xs font-medium text-green-800 bg-green-100 px-2.5 py-0.5 rounded">Active</div>);
      case 'upcoming':
        return (<div className="inline-block text-xs font-medium text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded">Upcoming</div>);
      case 'closed':
        return (<div className="inline-block text-xs font-medium text-gray-800 bg-gray-200 px-2.5 py-0.5 rounded">Closed</div>);
      default:
        return (<></>);
    }
  };

  public static displayPreApprovalsStatusLabel = (value: string) : React.ReactNode => {
    switch(value.toLowerCase()) {
      case 'created':
        return (<div className="inline-block text-xs font-medium text-gray-800 bg-gray-200 px-2.5 py-0.5 rounded">Pending</div>);
      case 'open':
        return (<div className="inline-block text-xs font-medium text-green-800 bg-green-100 px-2.5 py-0.5 rounded">Opened</div>);
      case 'delivered':
        return (<div className="inline-block text-xs font-medium text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded">Delivered</div>);
      case 'link_open':
        return (<div className="inline-block text-xs font-medium text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded">Clicked</div>);
      case 'bounce':
      case 'deferred':
      case 'dropped':
      case 'undeliverable':
        return (<div className="inline-block text-xs font-medium text-red-800 bg-red-200 px-2.5 py-0.5 rounded">Undeliverable</div>);
      case 're-sent':
        return (<div className="inline-block text-xs font-medium text-gray-800 bg-gray-200 px-2.5 py-0.5 rounded">Re-Sent</div>);
      default:
        return (<></>);
    }
  };

  public static displaySettlementsStatusLabel = (value: string) : React.ReactNode => {
    switch(value) {
      case 'deposited':
        return (<div className="inline-block text-xs font-medium text-green-800 bg-green-100 px-2.5 py-0.5 rounded">Deposited</div>);
      case 'processing':
        return (<div className="inline-block text-xs font-medium text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded">Processing</div>);
      case 'failed':
        return (<div className="inline-block text-xs font-medium text-red-800 bg-red-100 px-2.5 py-0.5 rounded">Failed</div>);
      case 'void':
        return (<div className="inline-block text-xs font-medium text-gray-800 bg-gray-100 px-2.5 py-0.5 rounded">Void</div>);
      default:
        return (<></>);
    }
  };

  public static displayActivityName = (value: string): string =>{
    const activity = Object.values(PreApprovedContactsActivityTypes).filter((activity)=>activity.value ===value)[0] || null
    if(activity){
      return activity.name;
    } 
    return value;
  }

  public static wrapBreableValue = (value: string) : React.ReactNode => {
    return (<span className="break-all">{value}</span>);
  };

  public static getPreApprovalItemActions = (inviteStatus: string, callback: (type:string) => void) : React.ReactNode => {
    const {appState} = useContext(AppContext);
    const dropdownId:string = 'snap-dropdown-preApproval-dashboard-' + Math.random();
    const setSnapDropdownContact = (event: CustomEvent) => {
      callback(event.detail.value);
    };
    const openActions = (currentDropDownId: string) => {
      const dropdown = document.getElementById(
        currentDropDownId
      ) as HTMLSnapDropdownElement;
      if (isPreApprovalInviteUndeliverable(inviteStatus.toLowerCase() || '')) {
        const newDropDownOptions = itemList.slice(1);
        dropdown.options = newDropDownOptions;
      } else
       if (dropdown.options && dropdown.options.length === 0) {
        dropdown.options = itemList;
      }
      dropdown.toggleDropdown();
    };
    return (
    <div key={dropdownId}>
      <SnapIcon
        icon="dots-vertical-line"
        size="md"
        className="ml-4 cursor-pointer text-gray-800"
        onClick={() =>
          openActions(dropdownId)
        }
      />
      <SnapDropdown
        id={dropdownId}
        modalType={isScreenSizeBelow(appState.windowSize.screen, 'md')? 'drawer': 'fullscreen'}
        hideButton
        trackCurrentSelection={false}
        onSnap-dropdown-item-selected={setSnapDropdownContact}
      />
    </div>)
  }

  public static getCampaignLink = (campaignName: string, campaignId: number) : React.ReactNode => {
    return (<SnapLink text={campaignName} href={getFundraiserPageUrl(campaignId)} target="_blank" size="sm"></SnapLink>);
  };


}