import React from 'react';
import { SnapIndicator } from '../../suit';
import RollupDashboard from './RollupDashboard';
import { Org } from '../../graphql/generated';

interface RollupDashboardGroupProps {
  title: string;
  dashboardSummaries: Org[];
  onDashboardOptionClicked: (dashboard: Org, option:string) => void;
}

const RollupDashboardGroup: React.FC<RollupDashboardGroupProps> = ({ title, dashboardSummaries, onDashboardOptionClicked }) => {
  const dashboardsSorted = dashboardSummaries.sort((a, b) => a.name?.localeCompare(b.name as string) as number)
  return (
    <div className={`mb-12 last:mb-0 ${(dashboardSummaries.length < 1) && 'hidden'}`}>
      <h5 className="text-lg font-semibold text-gray-800 flex items-center">{title} <SnapIndicator size="lg" color="blue" className='ml-2' text={dashboardSummaries.length} /></h5>
      {(dashboardsSorted.length > 0) &&
        dashboardsSorted.map((dashboardSummary, index) => {
          return (
            <RollupDashboard
              dashboard={dashboardSummary}
              onDashboardOptionClicked={onDashboardOptionClicked}
              key={index}
              className="mt-4"
            />
          )
        })
      }
    </div>
  );
};

export default RollupDashboardGroup;
