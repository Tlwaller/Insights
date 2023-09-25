import React from 'react';
import WhiteCard, { WhiteCardProps } from './WhiteCard';

interface WhiteCardWithTitleProps extends WhiteCardProps {
  title: string;
  fullPageWidth?: boolean;
  className?: string;
}

const WhiteCardWithTitle: React.FC<WhiteCardWithTitleProps> = ({ title, children, borderRadius = "normal", paddingX = "px-4", paddingY = "py-4", fullPageWidth = false, className = '' }) => {
  return (
    <WhiteCard
      borderRadius={borderRadius}
      paddingX={paddingX}
      paddingY={paddingY}
      className={className}
      fullPageWidth={fullPageWidth}
    >
      <h5 className="font-medium text-base text-gray-500 pb-4">{title}</h5>
      {children}
    </WhiteCard>
  );
};

export default WhiteCardWithTitle;
