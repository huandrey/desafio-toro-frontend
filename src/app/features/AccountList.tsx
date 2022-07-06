import React, { useState } from 'react';
import { accountResponseTranslate } from '../../core/constants';
import { formatObject } from '../../core/utils';
import { cpfCnpjFormatMask, moneyFormatMask } from '../../core/utils/mask';
import { Copy, Eye, EyeSlash } from '../components/Icon';

interface ItemProps {
  title: string;
  value: string;
}

interface Account {
  bank: number;
  agency_number: string;
  account_number: string;
  balance: string;
}

interface AccountListProps {
  data: Account;
}

function Item({ title, value }: ItemProps) {
  const [viewBalance, setViewBalance] = useState(false);
  function handleViewBalance() {
    setViewBalance((prev) => !prev);
  }

  if (title === 'id' || title === 'fk_id_user' || title === 'created_at') return null;

  return (
    <div className="group transition ease-in duration-200 w-full flex items-center justify-between gap-10 bg-white px-6 py-4 rounded-md text-gray-500 cursor-pointer hover:bg-primary hover:text-white hover:scale-105">
      <p>
        {`${accountResponseTranslate[title]}:`}
      </p>
      <p className="flex items-center gap-2">
        {value}
        {title !== 'balance' ? (
          <Copy />
        ) : (
          <button onClick={handleViewBalance}>
            {!viewBalance ? <EyeSlash /> : <Eye />}
          </button>
        )}
      </p>
    </div>
  );
}

function AccountList({ data }: AccountListProps) {
  const masks = {
    cpf: (value: string) => cpfCnpjFormatMask(value),
    balance: (value: string) => moneyFormatMask(value),
  };

  const formatAccount = formatObject(data, masks);

  return (
    <div className="mx-auto w-80 flex items-center flex-col md:w-96 justify-center md:items-start space-y-2">
      {formatAccount.map(({ key, value }) => (
        <Item key={key} title={key} value={value} />
      ))}
    </div>
  );
}

export default AccountList;
