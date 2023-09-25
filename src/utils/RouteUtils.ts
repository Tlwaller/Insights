/* Route Utils */

export const getPathnameParts = (path:string) : string[] => {
  let parts = path.split('/');
  if(parts && parts[0] === '') {
    parts.shift();
  }
  return parts;
};

export const getFundraiserPageUrl = (campaignId:string|number) : string => {
  const raiseAppUrl = process.env.REACT_APP_RAISE_APP_URL || '';
  return raiseAppUrl + 'v2/fundraisers/' + campaignId;
};

export const getCampaignReportUrl = (campaignId:string|number) : string => {
  const raiseAppUrl = process.env.REACT_APP_RAISE_APP_URL || '';
  return raiseAppUrl + 'fundraisers/' + campaignId + '/generate_report';
};

export const getCampaignReceiptUrl = (entityId:string|number, campaignId:string|number) : string => {
  const raiseAppUrl = process.env.REACT_APP_RAISE_APP_URL || '';
  return raiseAppUrl + 'entity_dashboard_reports/campaign_receipt/?entity_id=' + entityId + '&campaign_id=' + campaignId;
};

export const getGroupLeaderDashboardUrl = (entityId:string|number) : string => {
  const raiseAppUrl = process.env.REACT_APP_RAISE_APP_URL || '';
  return raiseAppUrl + 'my_dashboard/#/' + entityId + '/overview';
};