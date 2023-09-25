import React, { useEffect, useRef } from 'react';
import embed from 'vega-embed';
import {TopLevelSpec} from 'vega-lite';
import { InsAnalyticsSummaryStat, InsMonthlyCampaignStat } from '../../graphql/generated';
import { formatAmount } from '../../utils/CurrencyUtils';

interface YearComparisonChartProps {
  analyticsSummaryStats: InsAnalyticsSummaryStat[];
  monthlyCampaignStats: InsMonthlyCampaignStat[];
};

const currentYear = new Date().getFullYear();
const previousYear = currentYear - 1;

interface YearComparisonChartData {
  month: string;
  amount_raised: number | null;
  year: number;
  preloading: number | null;
  participation: number | null;
}

const data:YearComparisonChartData[] = [
  {month: "JAN", amount_raised: 0, year: previousYear, preloading: null, participation: null},
  {month: "FEB", amount_raised: 0, year: previousYear, preloading: null, participation: null},
  {month: "MAR", amount_raised: 0, year: previousYear, preloading: null, participation: null},
  {month: "APR", amount_raised: 0, year: previousYear, preloading: null, participation: null},
  {month: "MAY", amount_raised: 0, year: previousYear, preloading: null, participation: null},
  {month: "JUN", amount_raised: 0, year: previousYear, preloading: null, participation: null},
  {month: "JUL", amount_raised: 0, year: previousYear, preloading: null, participation: null},
  {month: "AUG", amount_raised: 0, year: previousYear, preloading: null, participation: null},
  {month: "SEP", amount_raised: 0, year: previousYear, preloading: null, participation: null},
  {month: "OCT", amount_raised: 0, year: previousYear, preloading: null, participation: null},
  {month: "NOV", amount_raised: 0, year: previousYear, preloading: null, participation: null},
  {month: "DEC", amount_raised: 0, year: previousYear, preloading: null, participation: null},

  {month: "JAN", amount_raised: 0, year: currentYear, preloading: null, participation: null},
  {month: "FEB", amount_raised: 0, year: currentYear, preloading: null, participation: null},
  {month: "MAR", amount_raised: 0, year: currentYear, preloading: null, participation: null},
  {month: "APR", amount_raised: 0, year: currentYear, preloading: null, participation: null},
  {month: "MAY", amount_raised: 0, year: currentYear, preloading: null, participation: null},
  {month: "JUN", amount_raised: 0, year: currentYear, preloading: null, participation: null},
  {month: "JUL", amount_raised: 0, year: currentYear, preloading: null, participation: null},
  {month: "AUG", amount_raised: 0, year: currentYear, preloading: null, participation: null},
  {month: "SEP", amount_raised: 0, year: currentYear, preloading: null, participation: null},
  {month: "OCT", amount_raised: 0, year: currentYear, preloading: null, participation: null},
  {month: "NOV", amount_raised: 0, year: currentYear, preloading: null, participation: null},
  {month: "DEC", amount_raised: 0, year: currentYear, preloading: null, participation: null},
]

const YearComparisonChart: React.FC<YearComparisonChartProps> = ({ analyticsSummaryStats = [], monthlyCampaignStats = [] }) => {
  const containerRef = useRef<HTMLInputElement>(null);
  const getChartData = (raised:InsAnalyticsSummaryStat[], details:InsMonthlyCampaignStat[]) => {
    let values = data.map(a => {return {...a}});
    let totalCurrentYear = 0;
    let totalPreviousYear = 0;
    raised.forEach(summaryStat => {
      const position = (summaryStat.year === currentYear) ? (summaryStat.month - 1) + 12 : summaryStat.month - 1;
      values[position].amount_raised = (values[position].amount_raised || 0) + (summaryStat.amount_raised_cents / 100);
      if(summaryStat.year === currentYear) {
        totalCurrentYear += (summaryStat.amount_raised_cents / 100);
      } else {
        totalPreviousYear += (summaryStat.amount_raised_cents / 100);
      }
    });
    details.forEach(monthlyCampaignStat => {
      const position = (monthlyCampaignStat.year === currentYear) ? (monthlyCampaignStat.month - 1) + 12 : monthlyCampaignStat.month - 1;
      values[position].preloading = Math.round(monthlyCampaignStat.preloading as number) / 100;
      values[position].participation = Math.round(monthlyCampaignStat.participation as number) / 100;
    });
    return {values, totalCurrentYear, totalPreviousYear};
  }

  const getLineChartSpec = (raised:InsAnalyticsSummaryStat[], details:InsMonthlyCampaignStat[]): TopLevelSpec => {
    const chartData = getChartData(raised, details);
    return {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      description: 'Campaigns year comparison chart',
    
      data: {values: chartData.values},
      mark: {type: 'line', point: {filled: false, fill: 'white', size: 50}, tooltip: {content: 'data'}},
      width: 'container',
      height: 'container',
      padding: 20,
      encoding: {
        x: {
            field: 'month',
            type: 'ordinal',
            sort: null,
            scale: {padding: -8},
            axis: {
                title: null,
                grid: true,
                gridColor: '#E2E8F0',
                ticks: false,
                labelAngle: 0,
                labelColor: '#94A3B8',
                labelPadding: 12,
            }
        },
        y: {
            field: 'amount_raised',
            type: 'quantitative',
            sort: null,
            axis: {
                title: null,
                ticks: false,
                labelColor: '#94A3B8',
                labelPadding: 12,
            }
        },
        tooltip: [
          {field: 'amount_raised', type: 'ordinal', format: '$,.2f', title: 'Total Raised'},
          {field: 'participation', type: 'ordinal', format: '.0%', title: 'Participation'},
          {field: 'preloading', type: 'ordinal', format: '.0%', title: 'Preloading'}
        ],
        color: {
          type: 'nominal',
          field: 'year',
          scale: {
            range: ['#2043B0', '#7BB4FB'],
          },
          legend: {
            title: null,
            orient: 'top-right',
            direction: 'vertical',
            labelExpr: `datum.label == ${currentYear} ? "${currentYear} (Total Raised: ${formatAmount(chartData.totalCurrentYear)})" : "${previousYear} (Total Raised: ${formatAmount(chartData.totalPreviousYear)})"`,
          }
        },
      } 
    };
  }
  
  //const lineChartSpec: TopLevelSpec = 
  
  useEffect(() => {
    if (containerRef.current) {
      //adding vega-lite chart
      embed(containerRef.current, getLineChartSpec(analyticsSummaryStats, monthlyCampaignStats), {actions: false});
    }
  }, [analyticsSummaryStats, monthlyCampaignStats]); //eslint-disable-line
  
  return (
      <div id="vega-line-chart" ref={containerRef} className="w-full h-80"/>
  );
};

export default YearComparisonChart;