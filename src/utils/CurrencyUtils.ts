/* Currency Utils */

export const centsToDollars = (amount: number) => amount / 100

export const formatAmount = (amount: number, currency: string = '$') : string => {
  let formattedValue;
  const amountZero = amount === 0;
  const stringAmount = amount.toString();
  if(stringAmount.indexOf('.') >= 0) {
    const amountParts = stringAmount.split('.');
    formattedValue = currency + ' ' + addCommas(amountParts[0]) + '.' + amountParts[1];
  } else {
    formattedValue = currency + ' ' + addCommas(stringAmount);
  }
  return amountZero ? formattedValue : forcePrecision(formattedValue, 2);
};

const addCommas = (value: string) : string => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const forcePrecision  = (value: string, precision: number = 0) : string => {
  if(precision > 0) {
    if(value.indexOf('.') < 0) {
      return value + '.' + '0'.repeat(precision);
    } else {
      const zeroCount = precision - (value.length - value.indexOf('.')) + 1;
      if(zeroCount > 0) {
        return value + '0'.repeat(zeroCount);
      } else {
        return value;
      }
    }
  }
  return value;
};
