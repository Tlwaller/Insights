import React, { useEffect } from 'react';
import WhiteCardWithTitle from '../WhiteCardWithTitle';
import { SnapHeatmapChart } from '../../suit';
import { InsDonationMapStat } from '../../graphql/generated';
import { HeatMapChartItem } from '@snap-mobile/snap-ui/dist/types/utils';
import { NoDonationData } from '../loading-empty-state/NoDonationData';

const mapId:string = "donations-heatmap";

interface DonationsMapProps {
  data?: InsDonationMapStat[]
  className?: string;
}

const DonationsMap: React.FC<DonationsMapProps> = ({ data = [], className = '' }) => {

  useEffect(() => {
    const map = document.getElementById(mapId) as HTMLSnapHeatmapChartElement;
    const filteredData = data.filter(d => {
      return d.lat !== null && d.long !== null;
    });
    if(map){
      map.options = filteredData as HeatMapChartItem[];
    }
  }, [data]);

  return (
    <WhiteCardWithTitle title="General Donations Map" className={`${className}`}>
      <div className='h-96 w-full'>
        {
          data.length
          ? 
          <>
            <SnapHeatmapChart 
              height={384}
              id={mapId}
              scale={0.25}
              projectionScale={1}
            />
          </>
          : <div>
              <NoDonationData/>
            </div>
        }
      </div>
    </WhiteCardWithTitle>
  );
};

export default DonationsMap;
