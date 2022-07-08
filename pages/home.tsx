import React, { useContext, useEffect, useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { parseCookies } from 'nookies';
import { Table, ToastContainer } from '../src/app/components';
import list from '../src/assets/list.svg';
import { AccountList, Header } from '../src/app/features';
import { AuthContext } from '../src/core/context/AuthContext';
import { AccountContext } from '../src/core/context/AccountContext';
import { Account } from '../src/core/services/account.service';
import { Transaction } from '../src/core/services/transaction.service';

const HomeAuth: NextPage = (props) => {
  const { user } = useContext(AuthContext);
  const { getAccount, account, setAccount } = useContext(AccountContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function getTransactions() {
      const { token } = props;
      const res = await Transaction.get(token);

      if (res.statusCode === 200) {
        setTransactions(res?.data?.transactions);
      }
    }

    getTransactions();
  }, []);

  useEffect(() => {
    async function getUserAccount() {
      if (user) {
        const res = await getAccount(user?.id);

        if (!res.data.id) {
          const res = await Account.create(user.id);
          setAccount(res?.data);
        }
      }
    }
    getUserAccount();
  }, [user]);

  return (
    <div className="h-full bg-gray-100 pb-10">
      <Header />
      <ToastContainer />
      <main className="block md:flex items-center justify-between gap-12 max-w-7xl mx-auto mt-12 py-8 px-8">
        <div className="md:w-2/4 space-y-2">
          <h2 className="text-center text-3xl font-bold tracking-wide md:text-5xl md:text-start mb-4">
            {`Sua conta está aberta, ${user?.first_name}!`}
          </h2>
          <p className="w-76 mx-auto text-center text-sm md:text-start text-gray-400 md:w-full">
            O próximo passo é transferir recursos para começar a investir.
            Lembre-se que a conta de onde você está transferindo o dinheiro
            também deve estar no seu nome.
          </p>
        </div>
        <div className="mt-10 md:mt-0">
          { !!account && <AccountList data={account} />}
        </div>
      </main>
      <div className="flex items-center justify-center mx-auto md:hidden">
        <button className="py-4 px-12 bg-primary text-white font-medium rounded-xl">
          Ver Histórico de transações
        </button>
      </div>
      <div className="hidden md:flex items-center justify-between space-x-12 max-w-7xl mx-auto mt-4 py-8 pb-20 px-6">
        <Table
          title="Histórico de transações"
          columns={[
            'Banco Origem',
            'CPF Origem',
            'Agência Origem',
            'Data da transação',
            'Valor',
          ]}
          rows={transactions}
        />
        <div className="w-72">
          <Image className="contains" src={list} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeAuth;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'nextauth.token': token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      token,
    },
  };
};
