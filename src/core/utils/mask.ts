/* eslint-disable no-useless-escape */

import VMasker from 'vanilla-masker';

export const dateFormatMask = (value: string) => VMasker.toPattern(value, '99/99/9999');

export const cpfCnpjFormatMask = (value: string) => VMasker.toPattern(value, '999.999.999-99');

export const cleanCpfFormat = (value: string) => value.replace(/(\.|\/|\-)/g, '');

export const phoneFormatMask = (value: string) => {
  const formatValue = value.replace(/[^0-9]/g, '');
  const newValue = formatValue[0] === '0' ? formatValue.substring(1) : formatValue;
  const mask = newValue?.length <= 10 ? '(99) 9999-9999' : '(99) 99999-9999';

  return VMasker.toPattern(newValue, mask);
};

export const moneyFormatMask = (value: string | number) => {
  const valueSplit = String(value).split('.');

  if (valueSplit[1]?.length <= 1) {
    valueSplit[1] = `${valueSplit[1]}0`;
  }

  if (!valueSplit[1]) {
    valueSplit[1] = '00';
  }

  return VMasker.toMoney(valueSplit.join(''));
};

export const hideCpf = (value: string) => {
  let hiddenCpf = '***.';
  hiddenCpf += value.slice(3, 6);
  hiddenCpf += '***.-';
  hiddenCpf += value.slice(9, 11);
  return hiddenCpf;
};

export default function isEmailValid(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
