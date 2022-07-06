import React, {
  createContext, ReactNode, useEffect, useMemo, useState,
} from 'react';
import { Account } from '../services/account.service';
import { saveLocal } from '../utils/local';

interface AccountProps {
  bank: number;
  agency_number: string;
  account_number: string;
  balance: string;
}

type AccountContextData = {
  getAccount(userId: string): Promise<void>
  account: AccountProps;
};

type AccountProviderProps = {
  children: ReactNode
};

export const AccountContext = createContext({} as AccountContextData);

export default function AccountProvider({ children }: AccountProviderProps) {
  const [account, setAccount] = useState({} as AccountProps);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { account: storagedAccount } = JSON.parse(localStorage.getItem('state'));

      setAccount(storagedAccount);
    }
  }, []);

  async function getAccount(userId: string) {
    const { data } = await Account.getInfo(userId);
    saveLocal('account', data);
  }

  const AccountContextValues = useMemo(
    () => ({ getAccount, account }),
    [getAccount, account],
  );

  return (
    <AccountContext.Provider value={AccountContextValues}>
      {children}
    </AccountContext.Provider>
  );
}
