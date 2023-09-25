import React from 'react';
import { formatAmount } from "../utils/CurrencyUtils";

interface StatBoxAProps {
  statName  : string;
  amount   : number;    
}

const StatBoxA: React.FC<StatBoxAProps> = ({ statName, amount }): JSX.Element => {
  return (
    <div className='border border-zinc-200 rounded p-5'>
      <h4 className='text-sm text-slate-600'>{statName}</h4>
      <span className='text-slate-800 text-lg'>
         <strong>{formatAmount(amount)}</strong>
       </span>
     </div>
  );
};

export default StatBoxA;
