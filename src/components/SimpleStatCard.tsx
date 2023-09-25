import React from 'react';
import WhiteCard from './WhiteCard';

interface SimpleStatCardProps {
  stat: string;
  value: string | number;
}

const SimpleStatCard: React.FC<SimpleStatCardProps> = ({ stat, value }) => {
  return (
    <WhiteCard paddingX="px-2 sm:px-4" paddingY="py-2 sm:py-4">
      <h6 className='text-xs sm:text-base font-medium text-gray-500'>{stat}</h6>
      <span className='text-2xl sm:text-3xl text-gray-800'>
         <strong className="font-semibold">{value}</strong>
       </span>
    </WhiteCard>
  );
};

export default SimpleStatCard;
