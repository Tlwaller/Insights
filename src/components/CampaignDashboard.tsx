import React from 'react';
import CardCampaignStatus from './cards/CardCampaignStatus';
import CardCampaignBar from './cards/CardCampaignBar';
import { InsLtrChartData } from '../graphql/generated';
import { formatAmount } from '../utils/CurrencyUtils';

export interface CampaignDashboardProps {
    title?: string;
    programType: string;
    data?: InsLtrChartData;
}

const myStyles = {
    titleGrey: {
        color: '#64748B'
    },
    lifeTotal: { 
        color: '#10B981',
        fontSize: '1.75rem',
        fontWeight: '700',
        fontamily: 'Inter'
    },
};

const CampaignDashboard: React.FC<CampaignDashboardProps> = ({title, programType, data}) => {
    const activeTotal = (data?.activeCampaignsTotalCents) ? data?.activeCampaignsTotalCents / 100 : 0;
    const closedTotal = (data?.closedCampaignsTotalCents) ? data?.closedCampaignsTotalCents / 100 : 0;
    const upcomingForecasted = (data?.upcomingCampaignsForecastedAmountCents) ? data?.upcomingCampaignsForecastedAmountCents / 100 : 0;
    const activeCardData = {
        totalRaised: activeTotal,
        participation: (data?.activeCampaignsParticipation) ? data?.activeCampaignsParticipation : 0,
        totalCardsLength: (data?.activeCampaignsCount) ? data?.activeCampaignsCount : 0
    };
    const closedCardData = {
        totalRaised: closedTotal,
        participation: (data?.closedCampaignsParticipation) ? data?.closedCampaignsParticipation : 0,
        totalCardsLength: (data?.closedCampaignsCount) ? data?.closedCampaignsCount : 0
    };
    const upcomingCardData = {
        forecasted: upcomingForecasted,
        participantSignin: (data?.upcomingCampaignsParticipantSignIn) ? data?.upcomingCampaignsParticipantSignIn : 0,
        totalCardsLength: (data?.upcomingCampaignsCount) ? data?.upcomingCampaignsCount : 0
    };
    const total = (data?.ltr) ? data?.ltr / 100 : 0;
    const avg = (data?.avgDonationCents) ? data?.avgDonationCents / 100 : 0;
    const chartData = {
        activeAmount: activeTotal,
        closedAmount: closedTotal,
        upcomingAmount: upcomingForecasted
    }
    
    return(
    <div className='grid grid-cols-6 sm:gap-6 mb-6'>
        <div className='order-1 xs:col-span-3 sm:col-span-3 md:col-span-2'>
            <p style={myStyles.titleGrey}>Lifetime Total Raised</p>
            <p style={myStyles.lifeTotal}>{formatAmount(total)}</p>
            <div className='hidden md:block'>
                <p style={myStyles.titleGrey}>Average Donation</p>
                <p><b>{formatAmount(avg)}</b></p>
            </div>
        </div>
        <div className='order-2 md:hidden sm:order-2 md:order-3 xs:col-span-3 sm:col-span-6 md:col-span-6'>
            <p style={myStyles.titleGrey}>Average Donation</p>
            <p><b>{formatAmount(avg)}</b></p>
        </div>
        <div className='order-3 sm:order-3 md:order-2 xs:col-span-6 sm:col-span-3 md:col-span-4'>
            { data &&
                <CardCampaignBar campaignProps={chartData} />
            }
        </div>
        <div className='gap-4 grid col-span-6 order-3'>
        <div className='order-4 col-span-3 sm:col-span-6 md:col-span-3'>
            <CardCampaignStatus type='active' cardData={activeCardData} />
        </div>
        <div className="order-5 col-span-3 sm:col-span-6 md:col-span-3">
            <CardCampaignStatus type='closed' cardData={closedCardData} />
        </div>
        <div className="order-6 col-span-6">
            <CardCampaignStatus type='upcoming' cardData={upcomingCardData} />
        </div>

        </div>
    </div>
    );
};

export default CampaignDashboard;
