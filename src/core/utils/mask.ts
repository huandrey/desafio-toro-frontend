/* eslint-disable no-useless-escape */

import VMasker from 'vanilla-masker';

export const dateFormatMask = (value: string) => {
  return VMasker.toPattern(value, '99/99/9999');
};

export const cpfCnpjFormatMask = (value: string) => {
  return VMasker.toPattern(value, '999.999.999-99');
};

export const cleanCpfFormat = (value: string) => {
  return value.replace(/(\.|\/|\-)/g, '');
};

export const phoneFormatMask = (value: string) => {
  const formatValue = value.replace(/[^0-9]/g, '');
  const newValue =
    formatValue[0] === '0' ? formatValue.substring(1) : formatValue;
  const mask = newValue?.length <= 10 ? '(99) 9999-9999' : '(99) 99999-9999';

  return VMasker.toPattern(newValue, mask);
};

export const moneyFormatMask = (value: string) => {
  return VMasker.toMoney(value);
};
