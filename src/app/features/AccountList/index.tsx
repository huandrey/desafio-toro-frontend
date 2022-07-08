/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import { accountResponseTranslate } from '../../../core/constants';
import { formatObject } from '../../../core/utils';
import { cpfCnpjFormatMask, moneyFormatMask } from '../../../core/utils/mask';
import { Copy, Eye, EyeSlash } from '../../components/Icon';

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

  const copyToClipboard = (label: string, value: string) => {
    copy(value);
    toast.success(`${label} copiado(a) com sucesso!`);
  };

  return (
    <div className="group transition ease-in duration-200 w-full flex items-center justify-between gap-10 bg-white px-6 py-4 rounded-md text-gray-500 cursor-pointer hover:bg-primary hover:text-white hover:scale-105">
      <p>
        {`${accountResponseTranslate[title]}:`}
      </p>
      <p className="flex items-center gap-2">
        {title === 'balance' && !viewBalance ? '***' : value}
        {title !== 'balance' ? (
          <button onClick={() => copyToClipboard(accountResponseTranslate[title], value)}>
            <Copy />
          </button>
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
  const [account, setAccount] = useState([]);

  const masks = {
    cpf: (value: string) => cpfCnpjFormatMask(value),
    balance: (value: string) => moneyFormatMask(value),
  };

  useEffect(() => {
    const formatAccount = formatObject(data, masks);
    setAccount(formatAccount);
  }, [data]);

  return (
    <div className="mx-auto w-80 flex items-center flex-col md:w-96 justify-center md:items-start space-y-2">
      {account?.map(({ key, value }) => (
        <Item key={key} title={key} value={value} />
      ))}
    </div>
  );
}

export default AccountList;
