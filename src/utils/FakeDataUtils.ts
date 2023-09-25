/* Fake Data Utils */

import { CampaignSummary } from "../components/campaigns/CampaignTypes";
import { ContactInformation } from "../components/ContactTypes";
import { DashboardSummary } from "../components/dashboard/DashboardTypes";
import { RollupDashboardSummary } from "../components/rollup/RollupTypes";
import { PendingAction } from "../components/widgets/PendingActionTypes";

const fakeSchools = ['East Snapton High School', 'East Snapton Middle School', 'West Snapton High School', 'West Snapton Middle School', 'Mason-Rice Elementary', 'Little Harbor Elementary School', 'Marais des Cygnes Valley Elementary'];
const fakeNames = ['John Smith', 'Marie Bush', 'George Johnson', 'Mark Turner', 'Paul Green', 'Billy Robertson', 'Anwar Mcfadden', 'Tulisa Campos', 'Christina Quintana', 'Shaurya Davey', 'Miley Woolley', 'Trevor French', 'Harleen Jones', 'Laiba Velez', 'Judah Mayer', 'Fariha Michael', 'Valerie Poole', 'Kyran Bull', 'Jayden Wood', 'Henna Irving', 'Humera Bryan'];
const fakePrograms = ['Wrestling', 'Baseball', 'Volleyball', 'Basketball', 'Math Club', 'Band', 'Track and Field'];
const fakeCampaigns = ['Tigers Wrestling 2021', 'Tigers Baseball 2021', 'Tigers Wrestling 2022', 'Tigers Baseball 2022', 'Bulldogs Basketball 2021', 'Bulldogs Track and Field 2021 Equipment And Uniform Campaign', 'Chess Team 2021'];
const fakeDateRanges = ['03/09/21 - 04/07/22', '12/25/20 - 04/22/22', '01/05/21 - 11/16/22', '07/10/20 - 06/11/21', '02/10/20 - 05/29/22', '12/13/19 - 01/30/22'];
const fakeDates = ['03/09/21', '04/07/22', '12/25/20', '04/22/22', '01/05/21', '11/16/22', '07/10/20', '06/11/21', '02/10/20', '05/29/22', '12/13/19', '01/30/22'];

const randIndex = (t:number) => { return Math.floor(Math.random() * t);};

const randSchool = () => { return fakeSchools[randIndex(fakeSchools.length)]};
const randName = () => { return fakeNames[randIndex(fakeNames.length)]};
const randProgram = () => { return fakePrograms[randIndex(fakePrograms.length)]};
const randCampaign = () => { return fakeCampaigns[randIndex(fakeCampaigns.length)]};
const randDateRange = () => { return fakeDateRanges[randIndex(fakeDateRanges.length)]};
const randDate = () => { return fakeDates[randIndex(fakeDates.length)]};

const randNumber = (min:number, max:number) => { return Math.floor(Math.random() * (max - min + 1)) + min;}
const randPercentage = () => { return randNumber(0, 100) + '%'; }

export const fakeCampaignsTableData = (rowCount: number = 125) : any[] => {
  const statuses = ['active', 'upcoming', 'closed'];
  let result: any[] = [];
  for (let index = 0; index < rowCount; index++) {
    result.push(
      {
        id: index + 1,
        schoolAffiliate: randSchool(),
        campaign: randCampaign(),
        program: randProgram(),
        status: statuses[randIndex(statuses.length)],
        totalRaised: randNumber(1000, 6000),
      }
    );
  }
  return result;
}

export const fakeSettlementsTableData = (rowCount: number = 125) : any[] => {
  const methods = ['Direct Deposit', 'Check'];
  const statuses = ['deposited', 'pending', 'canceled'];
  let result: any[] = [];
  for (let index = 0; index < rowCount; index++) {
    result.push(
      {
        id: index + 1,
        schoolAffiliate: randSchool(),
        campaign: randCampaign(),
        method: methods[randIndex(methods.length)],
        status: statuses[randIndex(statuses.length)],
        amount: randNumber(1000, 6000),
        lastUpdated: randDate(),
      }
    );
  }
  return result;
}

export const fakeSchoolsAffiliatesTableData = (rowCount: number = 125) : any[] => {
  const organizationTypes = ['School', 'Affiliate'];
  let result: any[] = [];
  for (let index = 0; index < rowCount; index++) {
    result.push(
      {
        id: index + 1,
        schoolAffiliate: randSchool(),
        organization: organizationTypes[randIndex(organizationTypes.length)],
        totalRaised: randNumber(10000, 55000),
        numberCampaigns: randNumber(5, 22),
      }
    );
  }
  return result;
}

export const fakeProgramsTableData = (rowCount: number = 125) : any[] => {
  let result: any[] = [];
  for (let index = 0; index < rowCount; index++) {
    result.push(
      {
        id: index + 1,
        schoolAffiliate: randSchool(),
        program: randProgram(),
        totalRaised: randNumber(1000, 6000),
        numberCampaigns: randNumber(5, 22),
      }
    );
  }
  return result;
}

export const fakeKYCFormsTableData = (rowCount: number = 125) : any[] => {
  const kycformsActions = ['No Action Needed', 'Submit KYC', 'Upload documents'];
  let result: any[] = [];
  for (let index = 0; index < rowCount; index++) {
    result.push(
      {
        id: index + 1,
        schoolAffiliate: randSchool(),
        campaign: randCampaign(),
        dates: randDateRange(),
        preloading: randPercentage(),
        actions: kycformsActions[randIndex(kycformsActions.length)],
      }
    );
  }
  return result;
}

export const fakeDonationsTableData = (rowCount: number = 125) : any[] => {
  let result: any[] = [];
  for (let index = 0; index < rowCount; index++) {
    result.push(
      {
        id: index + 1,
        schoolAffiliate: randSchool(),
        donor: randName(),
        campaign: randCampaign(),
        program: randProgram(),
        participant: randName(),
        amount: randNumber(20, 300),
      }
    );
  }
  return result;
};

export const fakeDepositsTableData = (rowCount: number = 125) : any[] => {
  const depositActions = ['No Action Needed', 'Setup Deposit'];
  let result: any[] = [];
  for (let index = 0; index < rowCount; index++) {
    result.push(
      {
        id: index + 1,
        schoolAffiliate: randSchool(),
        campaign: randCampaign(),
        leader: randName(),
        dates: randDateRange(),
        actions: depositActions[randIndex(depositActions.length)],
      }
    );
  }
  return result;
};

export const fakeRollupDashboards = (rowCount: number = 3) : any[] => {
  const entityNames = ['West Snapton High School', 'Est Snapton High School', 'West Snapton Middle School', 'East Snapton Middle School'];
  let result: RollupDashboardSummary[] = [];
  for (let index = 0; index < rowCount; index++) {
    result.push(
      {
        id: randNumber(1, 999),
        image: "https://picsum.photos/64",
        name: entityNames[randIndex(entityNames.length)],
        totalRaised: randNumber(60000, 90000),
        campaigns: randNumber(5, 25),
      }
    );
  }
  return result;
};

export const fakeDashboards = (rowCount: number = 2) : any[] => {
  const entityNames = ['West Snapton High School', 'Est Snapton High School', 'West Snapton Middle School', 'East Snapton Middle School', 'West Snapton High School Booster Club'];
  let result: DashboardSummary[] = [];
  for (let index = 0; index < rowCount; index++) {
    result.push(
      {
        id: randNumber(1, 999),
        image: "https://picsum.photos/64",
        name: entityNames[randIndex(entityNames.length)],
        totalRaised: randNumber(60000, 90000),
        campaigns: randNumber(5, 25),
      }
    );
  }
  return result;
};

export const fakePendingActions = () : any[] => {
  const icons  = [/* 'clipboard-list-solid', */ 'mail-solid'];
  const names = [/* 'Incomplete KYCs', */ 'Recently Closed Campaigns'];
  const descriptions = [/* 'Campaigns cannot launch until KYCs are completed', */ 'Share your appreciation with your donors'];
  const ctas = [/* 'Send Reminders', */ 'Email Donors'];
  let result: PendingAction[] = [];
  for (let index = 0; index < 1; index++) {
    result.push(
      {
        id: index + 1,
        icon: icons[index],
        color: index === 0 ? 'red' : 'yellow',
        count: randNumber(5, 9),
        name: names[index],
        description: descriptions[index],
        cta: ctas[index],
        ctaCallback: () => {},
      }
    );
  }
  return result;
};

export const fakeCampaingSummaries = (rowCount: number = 2) : any[] => {
  const entityNames = ['West Snapton High School Boys Varsity Football 2022', 'East Snapton High School Girls Varsity Basketball 2022', 'East Snapton High School Boys Hockey 2022', 'East Snapton High School Girls Hockey 2022', 'East Snapton High School Boys Varsity Basketball 2022'];
  const status = ['active', 'upcoming', 'closed'];
  let result: CampaignSummary[] = [];
  for (let index = 0; index < rowCount; index++) {
    result.push(
      {
        id: randNumber(1, 999),
        image: "https://picsum.photos/64",
        name: entityNames[randIndex(entityNames.length)],
        totalRaised: randNumber(60000, 90000),
        daysRemaining: randNumber(5, 15),
        status: status[index % 3],
      }
    );
  }
  return result;
};

export const fakeContactList = (rowCount: number = 8) : any[] => {
  const emails = ['contact.1@snapraise.com', 'contact.2@snapraise.com', 'contact.3@snapraise.com', 'contact.4@snapraise.com', 'contact.5@snapraise.com', 'contact.6@snapraise.com', 'contact.7@snapraise.com', 'contact.8@snapraise.com', 'contact.9@snapraise.com', 'contact.10@snapraise.com', 'contact.11@snapraise.com'];
  let result: ContactInformation[] = [];
  for (let index = 0; index < rowCount; index++) {
    result.push(
      {
        id: randNumber(1, 999),
        image: "https://picsum.photos/32",
        name: randName(),
        email: emails[randIndex(emails.length)],
        program: randProgram(),
      }
    );
  }
  return result;
};