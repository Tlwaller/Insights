import React, { useEffect, useState } from 'react';
import { Org, Product, useUserAssociationsQuery } from '../graphql/generated';
import SingleOrgDataLoader from './SingleOrgDataLoader';

export interface TeamTree {
  team: Org;
  campaigns: Org[];
}

export interface ProgramTree {
  program: Org;
  teams: TeamTree[];
}

export interface AffiliateTree {
  affiliate: Org;
  programs: ProgramTree[];
}

export interface SchoolTree {
  school: Org;
  programs: ProgramTree[];
  affiliates: AffiliateTree[];
}

export interface DistrictTree {
  district: Org;
  schools: SchoolTree[];
}

export interface OrgsTree {
  districts: DistrictTree[];
  schools: SchoolTree[]; //orphan schools
  affiliates: AffiliateTree[]; //orphan affiliates
}

export interface AssociationParsedOrgs {
  orgs: OrgsIndex;
  dashboardsIndex: string[];
  orgsTree: OrgsTree;
  campaignsReverseIndex: CampaignsReverseIndex;
}

export type OrgsIndex = Record<string, (DistrictTree | SchoolTree | AffiliateTree | ProgramTree | TeamTree)>;
export type CampaignsReverseIndex = Record<string, string>;

export enum orgType {
  All = 'All',
  School = 'School',
  District = 'District',
  PTA = 'PTA',
  Booster = 'Booster',
  Foundation = 'Foundation',
  Business = 'Business',
  Club = 'Club',
  Program = 'Program',
  Team = 'Team'
}

interface OrgsDataLoaderProps {
  userId: string | null | undefined;
  onOrgsDataLoaded: (orgsIndex:OrgsIndex, orgsTree:OrgsTree, dashboardsIndex:string[], campaignsReverseIndex:CampaignsReverseIndex) => void;
}

const OrgsDataLoader: React.FC<OrgsDataLoaderProps> = ({ userId, onOrgsDataLoaded }) => {
  const [orgsLoadedCount, setOrgsLoadedCount] = useState<number>(0);
  const [orgsLoaded, setOrgsLoaded] = useState<string[]>([]);
  const [parsedAssociations, setParsedAssociations] = useState<AssociationParsedOrgs[]>([]);
  const {data: associations, loading: associationsLoading} = useUserAssociationsQuery({variables: {userAssociationsId: userId || '', product: Product.Insights}});

  useEffect(() => {
    if(!associationsLoading && orgsLoadedCount === associations?.userAssociations?.length){
      let orgsIndex:OrgsIndex = {};
      const dashboardsIndex:string[] = [];
      const orgsTree:OrgsTree = {
        districts: [],
        schools: [],
        affiliates: [],
      };
      let campaignsReverseIndex:CampaignsReverseIndex = {};
      parsedAssociations.forEach(parsedAssociation => {
        orgsIndex = {...orgsIndex, ...parsedAssociation.orgs};
        campaignsReverseIndex = {...campaignsReverseIndex, ...parsedAssociation.campaignsReverseIndex};
        dashboardsIndex.push(...parsedAssociation.dashboardsIndex);
        if(parsedAssociation.orgsTree.districts.length > 0) {
          orgsTree.districts.push(...parsedAssociation.orgsTree.districts);
        } else if(parsedAssociation.orgsTree.schools.length > 0) {
          orgsTree.schools.push(...parsedAssociation.orgsTree.schools);
        } else {
          orgsTree.affiliates.push(...parsedAssociation.orgsTree.affiliates);
        }
      });
      onOrgsDataLoaded(orgsIndex, orgsTree, dashboardsIndex, campaignsReverseIndex);
    }
  }, [orgsLoadedCount, associationsLoading, associations]); //eslint-disable-line

  const onOrgDataLoaded = (orgId:string, data:any) => {
    let orgTree;
    const parsedAssoc:AssociationParsedOrgs = {
      orgs: {},
      dashboardsIndex: [],
      orgsTree: {
        districts: [],
        schools: [],
        affiliates: [],
      },
      campaignsReverseIndex: {},
    };
    const association:Org = associations?.userAssociations?.find(item => item?.id === orgId) as Org;
    //add assoc to dashindex
    parsedAssoc.dashboardsIndex.push(orgId);
    //parse orgtree
    if (association.type === orgType.District) {
      orgTree = {
        district: association,
        schools: getChildSchools(data, association.id, parsedAssoc, [association.id]),
      };
      parsedAssoc.orgsTree.districts.push(orgTree);
    } else if (association.type === orgType.School) {
      orgTree = {
        school: association,
        programs: getChildPrograms(data, association.id, parsedAssoc, [association.id]),
        affiliates: getChildAffiliates(data, association.id, parsedAssoc, [association.id]),
      };
      parsedAssoc.orgsTree.schools.push(orgTree);
    } else {
      orgTree = {
        affiliate: association,
        programs: getChildPrograms(data, association.id, parsedAssoc, [association.id]),
      };
      parsedAssoc.orgsTree.affiliates.push(orgTree);
    }
    //add assoc to org index
    parsedAssoc.orgs[orgId] = orgTree;
    //
    const assocs = parsedAssociations;
    assocs.push(parsedAssoc);
    setParsedAssociations(assocs);
    //
    if(orgsLoaded.indexOf(orgId) < 0){
      const newOrgsLoaded = orgsLoaded;
      newOrgsLoaded.push(orgId);
      setOrgsLoaded(newOrgsLoaded);
      setOrgsLoadedCount(orgsLoadedCount + 1);
    }
  };

  const getChildSchools = (data:any, districtId:string, parsedAssoc:AssociationParsedOrgs, orgsPath:string[]):SchoolTree[] => {
    const schools = data?.org?.filter((org:Org) => org?.parentId === districtId && org?.type === orgType.School);
    let schoolTree;
    return schools.map((school:Org) => {
      schoolTree = {
        school: school,
        affiliates: getChildAffiliates(data, school.id, parsedAssoc, [school.id, ...orgsPath]),
        programs: getChildPrograms(data, school.id, parsedAssoc, [school.id, ...orgsPath]),
      };
      parsedAssoc.orgs[school.id] = schoolTree;
      parsedAssoc.dashboardsIndex.push(school.id);
      return schoolTree;
    });
  };

  const getChildAffiliates = (data:any, schoolId:string, parsedAssoc:AssociationParsedOrgs, orgsPath:string[]):AffiliateTree[] => {
    const affiliates = data?.org?.filter((org:Org) => org?.parentId === schoolId && (
      org?.type === orgType.PTA || org?.type === orgType.Booster || org?.type === orgType.Foundation || org?.type === orgType.Business || org?.type === orgType.Club
      ));
    let affiliateTree;
    return affiliates.map((affiliate:Org) => {
      affiliateTree = {
        affiliate: affiliate,
        programs: getChildPrograms(data, affiliate.id, parsedAssoc, [affiliate.id, ...orgsPath]),
      };
      parsedAssoc.orgs[affiliate.id] = affiliateTree;
      parsedAssoc.dashboardsIndex.push(affiliate.id);
      return affiliateTree;
    });
  };

  const getChildPrograms = (data:any, parentId:string, parsedAssoc:AssociationParsedOrgs, orgsPath:string[]):ProgramTree[] => {
    const programs = data?.org?.filter((org:Org) => org?.parentId === parentId && org?.type === 'Program');
    let programTree;
    return programs.map((program:Org) => {
      programTree = {
        program: program,
        teams: getChildTeams(data, program.id, parsedAssoc, [program.id, ...orgsPath]),
      };
      parsedAssoc.orgs[program.id] = programTree;
      return programTree;
    });
  };

  const getChildTeams = (data:any, programId:string, parsedAssoc:AssociationParsedOrgs, orgsPath:string[]):TeamTree[] => {
    const teams = data?.org?.filter((org:Org) => org?.parentId === programId && org?.type === 'Team');
    let teamTree;
    return teams.map((team:Org) => {
      const campaigns = data?.org?.filter((org:Org) => org?.parentId === team.id && org?.type === 'Campaign');
      teamTree = {
        team: team,
        campaigns: campaigns,
      };
      parsedAssoc.orgs[team.id] = teamTree;
      const orgsPathStr = [team.id, ...orgsPath].join('/');
      campaigns.forEach((campaign:Org) => {
        parsedAssoc.campaignsReverseIndex[campaign.id] = orgsPathStr;
      });
      return teamTree;
    });
  };
  
  return (
    <>
      {!associationsLoading && associations?.userAssociations?.map(function(item, i){
        return <SingleOrgDataLoader key={i} orgId={item?.id} onOrgDataLoaded={onOrgDataLoaded} />
      })}
    </>
  );
};

export default OrgsDataLoader;
