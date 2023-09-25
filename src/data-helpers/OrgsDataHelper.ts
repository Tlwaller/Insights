import { AppState } from "../AppGlobalState";
import { AffiliateTree, DistrictTree, ProgramTree, SchoolTree, TeamTree } from "../components/OrgsDataLoader";
import { Org } from "../graphql/generated";
import { orgType } from "../components/OrgsDataLoader";

export type DashboardType = 'district' | 'school' | 'affiliate' | 'all'; 
export type ProgramGroup = Record<string, Org[]>;
export type CampaignIdInverseIndex = Record<string, string>;

// COMMON (any Org type)
export const getOrgName = (appState:AppState, orgId:string): string => {
  const tree = appState.orgsIndex[orgId];
  return getTreeRootOrg(tree).name || '';
}

export const getOrgById = (appState:AppState, orgId:string): Org|null => {
  const tree = appState.orgsIndex[orgId];
  return tree ? getTreeRootOrg(tree) : null;
}

export const getOrgIds = (orgs:Org[]): string[] => {
  return orgs.map(org => org?.id);
}

export const getOrgRaiseIds = (orgs:Org[]): number[] => {
  return orgs.map(org => org?.fields._deprecated_raise_id);
}

export const getOrgId = (org:Org): string => {
  return org.id;
}

export const getOrgRaiseId = (org:Org): number => {
  return org?.fields._deprecated_raise_id;
}

// DASHBOARDS
export const getDashboardsCount = (appState:AppState, type:DashboardType = 'all'): number => {
  switch (type) {
    case 'district':
      return appState.dashboardsIndex.filter(dashboard => dashboard.startsWith('dist')).length;
    case 'school':
      return appState.dashboardsIndex.filter(dashboard => dashboard.startsWith('sch')).length;
    case 'affiliate':
      return appState.dashboardsIndex.filter(dashboard => !dashboard.startsWith('dist') && !dashboard.startsWith('sch')).length;
    case 'all':
    default:
      return appState.dashboardsIndex.length;
  }
}

export const getDashboards = (appState:AppState, type:DashboardType = 'all'): Org[] => {
  let dashboardsIndex;
  switch (type) {
    case 'district':
      dashboardsIndex = appState.dashboardsIndex.filter(dashboard => dashboard.startsWith('dist'));
      break;
    case 'school':
      dashboardsIndex = appState.dashboardsIndex.filter(dashboard => dashboard.startsWith('sch'));
      break;
    case 'affiliate':
      dashboardsIndex = appState.dashboardsIndex.filter(dashboard => !dashboard.startsWith('dist') && !dashboard.startsWith('sch'));
      break;
    case 'all':
    default:
      dashboardsIndex = appState.dashboardsIndex;
      break;
  }
  return dashboardsIndex.map(index => {
    return getTreeRootOrg(appState.orgsIndex[index]); 
  });
}

// ORGANIZATIONS
export const getAllOrganizations = (appState:AppState): Org[] => {
  const organizations = [];
  let tree:any;
  for (let key in appState.orgsIndex) {
    tree = appState.orgsIndex[key];
    if(isDistrictTree(tree) || isSchoolTree(tree) || isAffiliateTree(tree)) {
      organizations.push(getTreeRootOrg(tree));
    }
  }
  return organizations;
}

export const getAllSchoolsAffiliates = (appState:AppState): Org[] => {
  const schoolsAffiliates = [];
  let tree:any;
  for (let key in appState.orgsIndex) {
    tree = appState.orgsIndex[key];
    if(isSchoolTree(tree) || isAffiliateTree(tree)) {
      schoolsAffiliates.push(getTreeRootOrg(tree));
    }
  }
  return schoolsAffiliates;
}

// CAMPAIGNS
export const getAllCampaigns = (appState:AppState): Org[] => {
  const campaigns = [];
  let tree:any;
  for (let key in appState.orgsIndex) {
    tree = appState.orgsIndex[key];
    if(isTeamTree(tree)) {
      campaigns.push(...tree.campaigns);
    }
  }
  return campaigns;
}

export const getOrgCampaignsWithOrgId = (appState:AppState, orgId:string): Org[] => {
  const tree:any = appState.orgsIndex[orgId];
  if(isDistrictTree(tree)) {
    return getDistrictTreeCampaigns(tree);
  } else if(isSchoolTree(tree)) {
    return getSchoolTreeCampaigns(tree);
  } else if(isAffiliateTree(tree)) {
    return getAffiliateTreeCampaigns(tree);
  } else if(isProgramTree(tree)) {
    return getProgramTreeCampaigns(tree);
  } else if(isTeamTree(tree)) {
    return getTeamTreeCampaigns(tree);
  }
  return [];
}

export const getOrgCampaignsWithOrg = (appState:AppState, org:Org): Org[] => {
  switch (org.type) {
    case orgType.District: 
      return getDistrictTreeCampaigns(appState.orgsIndex[org.id] as DistrictTree);
    case orgType.School: 
      return getSchoolTreeCampaigns(appState.orgsIndex[org.id] as SchoolTree);
    case orgType.Program: 
      return getProgramTreeCampaigns(appState.orgsIndex[org.id] as ProgramTree);
    case orgType.Team: 
      return getTeamTreeCampaigns(appState.orgsIndex[org.id] as TeamTree);
    case orgType.Booster: 
    case orgType.PTA:
    case orgType.Foundation:
    case orgType.Business:
    case orgType.Club:
      return getAffiliateTreeCampaigns(appState.orgsIndex[org.id] as AffiliateTree);
    default:
      return [];
  }
}

export const getProgramListCampaigns = (appState:AppState, programs:Org[]): Org[] => {
  const campaigns:Org[] = [];
  programs.forEach((program:Org) => {
    const programTree = appState.orgsIndex[program.id] as ProgramTree;
    campaigns.push(...getProgramTreeCampaigns(programTree));
  });
  return campaigns;
}

export const getCampaignRaiseIds = (campaigns:Org[]): number[] => {
  return campaigns.map(campaign => campaign?.fields._deprecated_raise_id);
}

export const getCampaignIdsInverseIndex = (campaigns:Org[]): CampaignIdInverseIndex => {
  const inverseIndex:CampaignIdInverseIndex = {};
  campaigns.forEach((campaign:Org) => {
    inverseIndex[campaign?.fields._deprecated_raise_id.toString()] = campaign.id;
  });
  return inverseIndex;
}

export const getCampaignSchoolOrAffiliateId = (appState:AppState, campaignId:string): string => {
  const campaignPath = appState.campaignsReverseIndex[campaignId].split('/');
  return campaignPath[2];
}

export const getDistrictTreeCampaigns = (tree:DistrictTree):Org[] => {
  const districtCampaigns:Org[] = [];
  tree.schools.forEach(schoolTree => {
    districtCampaigns.push(...getSchoolTreeCampaigns(schoolTree)); 
  });
  return districtCampaigns;
};

export const getSchoolTreeCampaigns = (tree:SchoolTree):Org[] => {
  const schoolCampaigns:Org[] = [];
  tree.programs.forEach(programTree => {
    schoolCampaigns.push(...getProgramTreeCampaigns(programTree)); 
  });
  tree.affiliates.forEach(affiliateTree => {
    schoolCampaigns.push(...getAffiliateTreeCampaigns(affiliateTree)); 
  });
  return schoolCampaigns;
};

export const getAffiliateTreeCampaigns = (tree:AffiliateTree):Org[] => {
  const affiliateCampaigns:Org[] = [];
  tree.programs.forEach(programTree => {
    affiliateCampaigns.push(...getProgramTreeCampaigns(programTree)); 
  });
  return affiliateCampaigns;
};

export const getProgramTreeCampaigns = (tree:ProgramTree):Org[] => {
  const programCampaigns:Org[] = [];
  tree.teams.forEach(teamTree => {
    programCampaigns.push(...getTeamTreeCampaigns(teamTree)); 
  });
  return programCampaigns;
};

export const getTeamTreeCampaigns = (tree:TeamTree):Org[] => {
  return tree.campaigns;
};

export const getSchoolsFromDistrict = (appState:AppState, org:Org): Org[] => {
  let schools:Org[] = [];
  const tree:any = appState.orgsIndex[org.id];
  if(isDistrictTree(tree)){
    tree.schools.forEach(schoolTree => {
      schools.push(schoolTree.school); 
    });
    return schools;
  } else {
    return [];
  }
}

//AFFILIATES
export const getAffiliatesFromDistrict = (appState:AppState, org:Org): Org[] => {
  let affiliates:Org[] = [];
  const tree:any = appState.orgsIndex[org.id];
  if(isDistrictTree(tree)){
    tree.schools.forEach(schoolTree => {
      schoolTree.affiliates.forEach(affiliateTree => {
        affiliates.push(affiliateTree.affiliate); 
      });
    });
    return affiliates;
  } else {
    return [];
  }
}

// PROGRAMS
export const getAllPrograms = (appState:AppState): Org[] => {
  const programs = [];
  let tree:any;
  for (let key in appState.orgsIndex) {
    tree = appState.orgsIndex[key];
    if(isProgramTree(tree)) {
      programs.push(tree.program);
    }
  }
  return programs;
}

export const getCampaignProgramId = (appState:AppState, campaignId:string): string => {
  const campaignPath = appState.campaignsReverseIndex[campaignId].split('/');
  return campaignPath[1];
}

export const getOrgProgramsWithOrgId = (appState:AppState, orgId:string): Org[] => {
  const tree:any = appState.orgsIndex[orgId];
  if(isDistrictTree(tree)) {
    return getDistrictTreePrograms(tree);
  } else if(isSchoolTree(tree)) {
    return getSchoolTreePrograms(tree);
  } else if(isAffiliateTree(tree)) {
    return getAffiliateTreePrograms(tree);
  }
  return [];
}

export const getOrgProgramsWithOrg = (appState:AppState, org:Org): Org[] => {
  switch (org.type) {
    case orgType.District: 
      return getDistrictTreePrograms(appState.orgsIndex[org.id] as DistrictTree);
    case orgType.School: 
      return getSchoolTreePrograms(appState.orgsIndex[org.id] as SchoolTree);
    case orgType.Booster: 
    case orgType.PTA:
    case orgType.Foundation:
    case orgType.Business:
    case orgType.Club:
      return getAffiliateTreePrograms(appState.orgsIndex[org.id] as AffiliateTree);
    default:
      return [];
  }
}

export const getDistrictTreePrograms = (tree:DistrictTree):Org[] => {
  const districtPrograms:Org[] = [];
  tree.schools.forEach(schoolTree => {
    districtPrograms.push(...getSchoolTreePrograms(schoolTree)); 
  });
  return districtPrograms;
};

export const getSchoolTreePrograms = (tree:SchoolTree):Org[] => {
  const schoolPrograms:Org[] = [];
  tree.programs.forEach(programTree => {
    schoolPrograms.push(programTree.program); 
  });
  tree.affiliates.forEach(affiliateTree => {
    schoolPrograms.push(...getAffiliateTreePrograms(affiliateTree)); 
  });
  return schoolPrograms;
};

export const getAffiliateTreePrograms = (tree:AffiliateTree):Org[] => {
  const affiliatePrograms:Org[] = [];
  tree.programs.forEach(programTree => {
    affiliatePrograms.push(programTree.program); 
  });
  return affiliatePrograms;
};

export const combineProgramsByName = (programs:Org[]):ProgramGroup => {
  const groups:ProgramGroup = programs.reduce((groups:ProgramGroup, program) => {
    const groupName = program.name || 'unknown';
    const group = groups[groupName] || [];
    group.push(program);
    groups[groupName] = group;
    return groups;
  }, {});
  return groups;
};


// TREES
const getTreeRootOrg = (tree:any):Org => {  
  return isDistrictTree(tree) ? tree.district : 
          isSchoolTree(tree) ? tree.school : 
          isAffiliateTree(tree) ? tree.affiliate : 
          isProgramTree(tree) ? tree.program : tree.team;
};

const isDistrictTree = (tree: DistrictTree): tree is DistrictTree => {
  return tree !== undefined && 'district' in tree;
}

const isSchoolTree = (tree: SchoolTree): tree is SchoolTree => {
  return tree !== undefined && 'school' in tree;
}

const isAffiliateTree = (tree: AffiliateTree): tree is AffiliateTree => {
  return tree !== undefined && 'affiliate' in tree;
}

const isProgramTree = (tree: ProgramTree): tree is ProgramTree => {
  return tree !== undefined && 'program' in tree;
}

const isTeamTree = (tree: TeamTree): tree is TeamTree => {
  return tree !== undefined && 'team' in tree;
}
