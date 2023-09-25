import React, { useEffect, useRef } from 'react';
import embed from 'vega-embed';
import { TopLevelSpec } from 'vega-lite';
import { formatAmount } from '../../utils/CurrencyUtils';

interface ChartProps {
  closedAmount: number,
  activeAmount: number,
  upcomingAmount: number
}

interface CardCampaignBarProps {
  campaignProps: ChartProps;
}

const CardCampaignBar: React.FC<CardCampaignBarProps> = ({ campaignProps }) => {
  const chartContainerRef = useRef<HTMLInputElement>(null);

  const ltrSpec: TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'LTR chart',
    data: {
      values: [
        {a: campaignProps.closedAmount, b: 'ltr', c: 'A', d: "Closed: " + formatAmount(campaignProps.closedAmount)},
        {a: campaignProps.activeAmount, b: 'ltr', c: 'B', d: "Active: " + formatAmount(campaignProps.activeAmount)},
        {a: campaignProps.upcomingAmount, b: 'ltr', c: 'C', d: "Upcoming: " + formatAmount(campaignProps.upcomingAmount)},
      ]
    },
    mark: {type: 'bar', cornerRadius: 4, height: 24 },
    config: {view: {stroke: null}},
    encoding: {
      x: {aggregate: 'sum', field: 'a', axis: {labels: true, title: null, domain: false, grid: false, ticks: false, labelColor: '#A3A3A3'}},
      y: {field: 'b', axis: {labels: false, ticks: false, title: null, domain: false, grid: false}},
      color: {field: 'c', scale: {range: ['#065F46', '#10B981', '#E8E8E8']}, legend: null},
      tooltip: {field: 'd', type: 'ordinal'}
    },
    width: "container",
    height: 50
  };

  useEffect(() => {
    if (chartContainerRef.current) {
      embed(chartContainerRef.current, ltrSpec, {actions: false});
    }
  }, []); // eslint-disable-line
  
  return (
    <div className="py-3 md:py-4 sm:py-0 sm:px-0">
      <div ref={chartContainerRef} style={{width: '100%'}}></div>
    </div>
  );
};

export default CardCampaignBar;
