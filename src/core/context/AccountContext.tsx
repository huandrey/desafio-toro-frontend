import React, {
  createContext, ReactNode, useMemo, useState,
} from 'react';
import { Account as AccountService } from '../services/account.service';
import { HttpResponse } from '../services/protocols/httpClient';

interface Account {
  bank: number;
  agency_number: string;
  account_number: string;
  balance: string;
}

export type AccountContextData = {
  getAccount(userId: string): Promise<HttpResponse<any>>;
  account: Account | null;
  createAccount(userId: string): Promise<HttpResponse<any>>;
  setAccount(account: Account): void;
};

type AccountProviderProps = {
  children: ReactNode
};

export const AccountContext = createContext({} as AccountContextData);

export default function AccountProvider({ children }: AccountProviderProps) {
  const [account, setAccount] = useState<Account | null>(null);

  async function getAccount(userId: string) {
    const res = await AccountService.getInfo(userId);
    if (res.statusCode === 200) {
      setAccount(res?.data);
    }

    return res;
  }

  async function createAccount(userId: string) {
    const res = await AccountService.create(userId);

    if (res.statusCode === 200) {
      setAccount(res?.data?.user);
    }

    return res;
  }

  const AccountContextValues = useMemo(
    () => ({
      getAccount, account, createAccount, setAccount,
    }),
    [getAccount, account, createAccount, setAccount],
  );

  return (
    <AccountContext.Provider value={AccountContextValues}>
      {children}
    </AccountContext.Provider>
  );
}
