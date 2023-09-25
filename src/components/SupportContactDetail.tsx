import React from 'react';

interface SupportContactDetailProps {
  name: string;
  phone: string;
  email: string;
  className?: string;
}

const SupportContactDetail: React.FC<SupportContactDetailProps> = ({ name, phone, email, className = '' }) => {
  return (
    <div className={`${className}`}>
      <h5 className="text-base font-medium text-gray-800 pb-4">{name}</h5>
      <span className="text-sm font-semibold text-gray-600 pb-4 block">{phone}</span>
      <span className="text-sm font-semibold text-blue-600 block">{email}</span>
    </div>
  );
};

export default SupportContactDetail;
