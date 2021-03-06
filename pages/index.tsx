import React, { useContext } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { Header } from '../src/app/features';
import pig from '../src/assets/pig.svg';
import { AuthContext } from '../src/core/context/AuthContext';

const Home: NextPage = () => {
  // const authenticated = false;
  const { isAuthenticated } = useContext(AuthContext);
  const haveAccount = false;
  const router = useRouter();
  function createAccount() {
    if (isAuthenticated && !haveAccount) createAccount();

    router.push('/signin');
  }
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
          <button onClick={createAccount} className="w-full md:w-fit px-16 py-4 inline-block bg-primary text-lg text-white rounded-md">Abra sua conta grátis</button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'nextauth.token': token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };
  }
  return {
    props: {
    },
  };
};
