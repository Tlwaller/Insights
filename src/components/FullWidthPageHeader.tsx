import React from 'react';

interface FullWidthPageHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const FullWidthPageHeader: React.FC<FullWidthPageHeaderProps> = ({ children, className = '' }): JSX.Element => {
  return (
    <div
      className={`
      bg-white
      shadow-sm
      ${className}
    `}
    >
      {children}
    </div>
  );
};

export default FullWidthPageHeader;
