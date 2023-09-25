import { formatAmount } from "./CurrencyUtils";

/* Render Data Utils */

export const displayFormattedValue = (value: any, format: string = 'text') : string => {
  switch(format) {
    case 'money':
      return formatAmount(parseFloat(value));
    default:
      return value;
  }
};

export const dateMMDDYY = (date: Date) : string => {
  return date.toLocaleDateString("en-US", {year: '2-digit', month: '2-digit', day: '2-digit'});
};

export const capitalize = (value: string) : string => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};
