import React from 'react';
import DashboardListItem from './DashboardListItem';
import { DashboardSummary } from './DashboardTypes';

interface DashboardListProps {
  title: string;
  dashboards: DashboardSummary[];
}

const DashboardList: React.FC<DashboardListProps> = ({ title, dashboards }) => {
return (
    <div className={`${(dashboards.length < 1) && 'hidden'}`}>
      <h3 className='font-semibold text-lg pt-6 pb-4'>{title}</h3>
      {(dashboards.length > 0) &&
        dashboards.sort((a, b) => a.name.localeCompare(b.name)).map((dashboard, index) => {
          return (
            <DashboardListItem
              dashboard={dashboard}
              key={index}
            />
          )
        })
      }
    </div>
  );
};

export default DashboardList;
