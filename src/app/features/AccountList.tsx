import React, { useState } from 'react';
import { accountPropsTranslate } from '../../core/constants';
import { formatObject } from '../../core/utils';
import { cpfCnpjFormatMask, moneyFormatMask } from '../../core/utils/mask';
import { Copy, Eye, EyeSlash } from '../components/Icon';

interface Account {
  bank: number;
  branch: string;
  account_number: string;
  balance: string;
}

interface AccountListProps {
  data: Account;
}

function AccountList({ data }: AccountListProps) {
  const [viewBalance, setViewBalance] = useState(false);
  function handleViewBalance() {
    setViewBalance((prev) => !prev);
  }

  const masks = {
    cpf: (value: string) => cpfCnpjFormatMask(value),
    balance: (value: string) => moneyFormatMask(value),
  };

  const formatAccount = formatObject(data, masks);

  return (
    <div className="mx-auto w-80 flex items-center flex-col md:w-96 justify-center md:items-start space-y-2">
      {formatAccount.map(({ key, value }) => (
        <div
          key={key}
          className="group transition ease-in duration-200 w-full flex items-center justify-between gap-10 bg-white px-6 py-4 rounded-md text-gray-500 cursor-pointer hover:bg-primary hover:text-white hover:scale-105"
        >
          <p>
            {accountPropsTranslate[key]}
            :
            {' '}
          </p>
          <p className="flex items-center gap-2">
            {(key === 'balance' && `R$ ${value}`) || value}
            {key !== 'balance' ? (
              <Copy />
            ) : (
              <button onClick={handleViewBalance}>
                {!viewBalance ? <EyeSlash /> : <Eye />}
              </button>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AccountList;
