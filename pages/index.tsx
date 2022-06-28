import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import pig from '../assets/pig.svg';

const Home: NextPage = () => {
  return (
    <div className="">
      <Header />
      <main className="flex items-center gap-12 rounded-3xl max-w-6xl mx-auto mt-12 bg-gray-100 py-8 px-8">
        <div className="w-96 self-end">
          <Image 
            className=" object-contains rounded-3xl"
            src={pig}
            alt=""
            layout="responsive"
          />
        </div>
        <div className="flex flex-col max-w-xl justify-center items-start space-y-10">
          <div className="max-w-lg">
            <h2 className="text-4xl">Tenha acesso à <strong>carteira mensal de ações</strong> da equipe de Análise da Toro.</h2>
          </div>
          <h3 className="text-xl text-gray-500">Todo mês nossa equipe analisa o mercado e seleciona <strong>ativos com ótimas probabilidades de valorização</strong> naquele mês. A rentabilidade histórica dessa carteira até Março de 2022 é de +66,86%.</h3>
          <button className="px-16 py-4 inline-block bg-primary text-lg text-white rounded-md">Abra sua conta grátis</button>
        </div>
      </main>
    </div>
  )
}

export default Home
