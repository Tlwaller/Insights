import classNames from 'classnames';
import React from 'react';

export interface WhiteCardProps {
  children: React.ReactNode;
  borderRadius?: "normal" | "large";
  paddingX?: string;
  paddingY?: string;
  fullPageWidth?: boolean;
  className?: string;
}

const WhiteCard: React.FC<WhiteCardProps> = ({ children, borderRadius = "normal", paddingX = "px-4", paddingY = "py-4", fullPageWidth = false, className = '' }): JSX.Element => {

  return (
    <div 
      className={
        classNames(
          'bg-white border-gray-200',
          {'border': !fullPageWidth, 'border-y': fullPageWidth},
          {'rounded-md': !fullPageWidth && borderRadius === 'normal', 'rounded-xl': !fullPageWidth && borderRadius === 'large'},
        ) + ` ${paddingX} ${paddingY} ${className}`}
    >
      {children}
    </div>
  );
};

export default WhiteCard;
