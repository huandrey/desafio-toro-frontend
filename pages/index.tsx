import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../src/app/components/Header';
import pig from '../src/assets/pig.svg';

const Home: NextPage = () => {
  const authenticated = false;
  const haveAccount = false;
  return (
    <div className="">
      <Header />
      <main className="mx-5 block md:flex items-center gap-12 rounded-3xl max-w-6xl md:mx-auto m-12 bg-gray-100 py-8 px-8">
        <div className="w-64 mx-auto md:w-96 self-end">
          <Image
            className="object-contains rounded-3xl"
            src={pig}
            alt=""
            layout="responsive"
          />
        </div>
        <div className="flex flex-col max-w-xl justify-center items-start space-y-10">
          <div className="max-w-lg">
            <h2 className="mt-5 text-2xl md:text-4xl">
              Tenha acesso à
              {' '}
              {' '}
              <strong>carteira mensal de ações</strong>
              {' '}
              da equipe de Análise da Toro.
            </h2>
          </div>
          <h3 className="text-md md:text-xl text-gray-500">
            Todo mês nossa equipe analisa o mercado e seleciona
            {' '}
            <strong>ativos com ótimas probabilidades de valorização</strong>
            {' '}
            naquele mês. A rentabilidade histórica dessa carteira até Março de 2022 é de +66,86%.
          </h3>
          {!haveAccount && (
            <Link href={authenticated ? '*' : '/signin'}>
              <button className="w-full md:w-fit px-16 py-4 inline-block bg-primary text-lg text-white rounded-md">Abra sua conta grátis</button>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
