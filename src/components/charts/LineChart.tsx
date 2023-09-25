import React, { useEffect, useRef } from 'react';
import embed from 'vega-embed';
import {TopLevelSpec} from 'vega-lite';

interface LineChartProps {
  dataset: object[];
  view?: string;
};

const year = new Date().getFullYear()

const LineChart: React.FC<LineChartProps> = (props) => {
  const containerRef = useRef<HTMLInputElement>(null);
  
  const lineChartSpec: TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'A simple line chart to visualize fundraiser data.',
  
    data:{values: (props.view === "summary" ? props.dataset[0] : props.dataset[1])},
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
          field: 'Total Raised',
          type: 'quantitative',
          sort: null,
          axis: {
              title: null,
              ticks: false,
              labelColor: '#94A3B8',
              labelPadding: 12,
          }
      },
      tooltip: ( props.view === 'summary' ?
        [
          {field: 'Participation', type: 'ordinal', format: '.0%'},
          {field: 'Preloading', type: 'ordinal', format: '.0%'}
        ]
        : [{field: 'Total Raised', type: 'ordinal', format: '$,.0f'}]
      ),
      color: {
          type: 'nominal',
          field: 'symbol',
          scale: {
              range: ['#2043B0', '#7BB4FB'],
          },
          legend: (props.view === 'year-comparison' ?
          {
            title: null,
            orient: 'top-right',
            direction: 'vertical',
            labelExpr: `datum.label == "${year} Total Raised" ? "${year - 1} (Total Raised: $53,256.46)" : "${year} (Total Raised: $53,256.46)"`,
          } : null)
      },
    } 
  };
  
  useEffect(() => {
    if (containerRef.current) {
      //adding vega-lite chart
      embed(containerRef.current, lineChartSpec, {actions: false});
    }
  }, []); //eslint-disable-line
  
  return (
      <div id="vega-line-chart" ref={containerRef} className="w-full h-80"/>
  );
};

export default LineChart;