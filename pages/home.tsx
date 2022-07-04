import React, { useContext } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Table } from '../src/app/components';
import list from '../src/assets/list.svg';
import { AccountList, Header } from '../src/app/features';
import { AuthContext } from '../src/core/context/AuthContext';

const HomeAuth: NextPage = () => {
  const data = {
    bank: 352,
    branch: '0001',
    account_number: '912391-3',
    cpf: '09998798749',
    balance: 'R$ 1000,00',
  };

  const { user } = useContext(AuthContext);

  return (
    <div className="h-full bg-gray-100 pb-10">
      <Header />
      <main className="block md:flex items-center justify-between gap-12 max-w-7xl mx-auto mt-12 py-8 px-8">
        <div className="md:w-2/4 space-y-2">
          <h2 className="text-center text-3xl font-bold tracking-wide md:text-5xl md:text-start leading-tight">
            {`Sua conta está aberta, ${!!user && user?.first_name}!`}
          </h2>
          <p className="w-76 mx-auto text-center text-sm md:text-start text-gray-400 md:w-full">
            O próximo passo é transferir recursos para começar a investir.
            Lembre-se que a conta de onde você está transferindo o dinheiro
            também deve estar no seu nome.
          </p>
        </div>
        <div className="mt-10 md:mt-0">
          <AccountList data={data} />
        </div>
      </main>
      <div className="flex items-center justify-center mx-auto md:hidden">
        <button className="py-4 px-12 bg-primary text-white font-medium rounded-xl">
          Ver Histórico de transações
        </button>
      </div>
      <div className="hidden md:flex items-center space-x-64 max-w-7xl mx-auto mt-4 py-8 pb-20 px-8">
        <Table
          title="Histórico de transações"
          columns={[
            'CPF Titular',
            'Beneficiário',
            'Data da transação',
            'Valor',
          ]}
          rows={[
            {
              sourceCpf: '***.***.**9-99',
              targetName: 'Fulano Ciclano',
              date: '28 jun - 14:45',
              value: 'R$ 1000,00',
            },
            {
              sourceCpf: '***.***.**9-99',
              targetName: 'Fulano Ciclano',
              date: '28 jun - 14:45',
              value: 'R$ 1000,00',
            },
            {
              sourceCpf: '***.***.**9-99',
              targetName: 'Fulano Ciclano',
              date: '28 jun - 14:45',
              value: 'R$ 1000,00',
            },
          ]}
        />
        <div className="w-72">
          <Image className="contains" src={list} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeAuth;
