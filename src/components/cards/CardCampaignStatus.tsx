import React, { useEffect, useState } from "react";
import { displayFormattedValue } from "../../utils/RenderDataUtils";

interface CardCampaignStatusProps {
    type: 'active' | 'closed' | 'upcoming';
    cardData: CardInfoProps;
}
interface CardInfoProps {
    totalRaised?: number;
    participation?: number;
    forecasted?: number;
    participantSignin?: number;
    totalCardsLength?: number;
}

const myStyles = {
    activeCard: {
        backgroundColor: '#ECFDF5',
        borderLeft: '8px solid #10B981',
        height: 'auto'
    },
    closedCard: {
        backgroundColor: '#F1F5F9',
        borderLeft: '8px solid #065F46',
        height: 'auto'
    },
    upcomingCard: {
        backgroundColor: '#EFF6FF',
        borderLeft: '8px solid #3B82F6',
        height: 'auto'
    },
    cardActiveColor: {
        color: '#10B981'
    },
    cardClosedColor: {
        color: '#065F46'
    },
    cardUpcomingColor: {
        color: '#3B82F6'
    }
};

const cardInnerStyleFormats = {
    activeCard: {
        container: 'md:grid-cols-2',
        items: 'md:col-span-1'
    },
    closedCard: {
        container: 'md:grid-cols-2',
        items: 'md:col-span-1'
    },
    upcomingCard: {
        container: 'grid-cols-4',
        items: 'col-span-2'
    }
};

const percentFormatter = new Intl.NumberFormat('default', {
    style: 'percent',
})

const CardCampaignStatus: React.FC<CardCampaignStatusProps> = ({ type = "", cardData }) => {
    const [cardStyles, setCardStyles] = useState(myStyles.activeCard);
    const [cardColor, setCardColors] = useState(myStyles.cardActiveColor);
    const [cardInnerContainer, setCardInnerContainer] = useState(cardInnerStyleFormats.activeCard);
    const [cardCampaignData, setCardCampaignData] = useState({});

    const cardTemplateData = {
        //This is the name of each card for this component
        active: {
            //these are the titles that are apart of that choosen card
            total_Raised: displayFormattedValue(Number(cardData.totalRaised), 'money'),
            participation: percentFormatter.format(Number(cardData.participation) / 100)
        },
        closed: {
            total_Raised: displayFormattedValue(Number(cardData.totalRaised), 'money'),
            participation: percentFormatter.format(Number(cardData.participation) / 100)
        },
        upcoming: {
            forecasted_Amount: displayFormattedValue(Number(cardData.forecasted), 'money'),
            "Participant Sign-In": percentFormatter.format(Number(cardData.participantSignin) / 100)
        },
    }

    useEffect(() => {
        switch (type) {
            case 'closed':
                return SetClosedCard();
            case 'upcoming':
                return SetUpcomingCard();
            default:
                SetActiveCard();
        }
    }, [cardData, type]); // eslint-disable-line

    const SetActiveCard = () => {
        setCardCampaignData(cardTemplateData.active);
        setCardStyles(myStyles.activeCard);
        setCardColors(myStyles.cardActiveColor);
        setCardInnerContainer(cardInnerStyleFormats.activeCard);
    }

    const SetClosedCard = () => {
        setCardCampaignData(cardTemplateData.closed);
        setCardStyles(myStyles.closedCard);
        setCardColors(myStyles.cardClosedColor);
        setCardInnerContainer(cardInnerStyleFormats.closedCard);
    };

    const SetUpcomingCard = () => {
        setCardCampaignData(cardTemplateData.upcoming);
        setCardStyles(myStyles.upcomingCard);
        setCardColors(myStyles.cardUpcomingColor);
        setCardInnerContainer(cardInnerStyleFormats.upcomingCard);
    }

    const CapitilizeCardTitleSections = (sectionTitle: string) => {
        var newTitle = sectionTitle[0].toUpperCase() + sectionTitle.slice(1).split('_').join(' ');
        return newTitle
    }

    const CapitilizeCardTitle = (title: string) => {
        var newTitle = title[0].toUpperCase() + title.slice(1);
        return newTitle
    }

    return (
        <div className='shadow rounded-lg' style={cardStyles}>
            <div className='px-2 pt-3 sm:px-4'>
                <h3 className='text-base font-semibold leading-6' style={cardColor}>{CapitilizeCardTitle(type)} ({cardData?.totalCardsLength})</h3>
            </div>
            <div>
                <dl className={`grid ${cardInnerContainer.container} pb-2`}>
                    {Object.entries(cardCampaignData).map((titles, index) => {
                        return <div key={index} className={`px-2 py-1 ${cardInnerContainer.items} sm:px-4`}>
                            <dt className='text-sm font-medium text-gray-500'>{CapitilizeCardTitleSections(titles[0])}</dt>
                            <dd className='mt-1 text-sm text-gray-900' style={
                                String(titles[1]).includes("%") || String(titles[0]).includes("forecasted")
                                ? {color: "black"}
                                : cardColor
                                }><b>{String(titles[1])}</b></dd>
                        </div>
                    })
                    }
                </dl>
            </div>
        </div>
    );
};
export default CardCampaignStatus;