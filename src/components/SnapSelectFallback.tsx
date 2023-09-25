import React, { ChangeEventHandler, useEffect, useRef } from 'react';

interface SnapSelectFallbackProps {
  id: string;
  name: string;
  children: React.ReactNode;
  label?: string;
  className?: string;
  onChange?:ChangeEventHandler<HTMLSelectElement>;
  toggleReset?: boolean;
}

const SnapSelectFallback: React.FC<SnapSelectFallbackProps> = ({ id, name, children, label, className = '', onChange, toggleReset }): JSX.Element => {
  const ref = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.selectedIndex = 0;
    }
  }, [toggleReset]); //eslint-disable-line

  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label htmlFor={id} className="font-medium text-sm text-gray-700">{label}</label>}
      <select id={id} name={name} ref={ref} className="py-2 px-2 mt-1 border border-gray-300 rounded-md w-full font-normal text-sm text-gray-900" onChange={onChange}>
        {children}
      </select>
    </div>
  );
};

export default SnapSelectFallback;
