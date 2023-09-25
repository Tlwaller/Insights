import React, { useEffect, useRef } from 'react';
import embed from 'vega-embed';
import { TopLevelSpec } from 'vega-lite';
import { formatAmount } from '../../utils/CurrencyUtils';

interface BreakdownProps {
  emailInviteAmount: number,
  textInviteAmount: number,
  extraFeaturesAmount: number,
  othersAmount: number,
  socialMediaAmount: number
}

interface BreakdownChartProps {
  breakdownProps: BreakdownProps;
}

const BreakdownChart: React.FC<BreakdownChartProps> = ({ breakdownProps }) => {
  const chartContainerRef = useRef<HTMLInputElement>(null);

  const breakdownSpec: TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'Breakdown chart',
    data: {
      "values": [
        {a: 'Email Invite', b: breakdownProps.emailInviteAmount, c: 1, d: 'Total raised by Email Invite: ' + formatAmount(breakdownProps.emailInviteAmount)},
        {a: 'Text Invite', b: breakdownProps.textInviteAmount, c: 2, d: 'Total raised by Text Invite: ' + formatAmount(breakdownProps.textInviteAmount)},
        {a: 'Extra Features', b: breakdownProps.extraFeaturesAmount, c: 3, d: 'Total raised by Extra Features: ' + formatAmount(breakdownProps.extraFeaturesAmount)},
        {a: 'Social Media', b: breakdownProps.socialMediaAmount, c: 4, d: 'Total raised by Social Media: ' + formatAmount(breakdownProps.socialMediaAmount)},
        {a: 'Others', b: breakdownProps.othersAmount, c: 5, d: 'Total raised by Others: ' + formatAmount(breakdownProps.othersAmount)},
      ]
    },
    mark: 'bar',
    encoding: {
        x: {field: 'a', type: 'nominal', axis: {labels: true, labelAngle: 0, title: null}, sort: {field: 'c'}},
        y: {field: 'b', type: 'quantitative', axis: {title: null}},
        color: {field: 'c', scale: {range: ['#3892FF']}, legend: null},
        tooltip: {field: 'd', type: 'ordinal'}
    },
    width: "container",
    height: 200
  };

  useEffect(() => {
    if (chartContainerRef.current) {
      embed(chartContainerRef.current, breakdownSpec, {actions: false});
    }
  }, []); // eslint-disable-line
  
  return (
    <div>
      <div ref={chartContainerRef} style={{width: '100%'}}></div>
    </div>
  );
};

export default BreakdownChart;
