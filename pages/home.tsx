import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import pig from '../assets/pig.svg';
import { Copy, EyeSlash } from 'phosphor-react';

const HomeAuth: NextPage = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Header />
      <main className="flex items-center justify-between gap-12 max-w-7xl mx-auto mt-12 py-8 px-8">
        <div className="w-2/4 space-y-2">
          <h2 className="font-bold tracking-wide text-5xl leading-tight	">Sua conta está aberta, Fulano!</h2>
          <p className="text-sm text-gray-400">O próximo passo é transferir recursos para começar a investir. Lembre-se que a conta de onde você está transferindo o dinheiro também deve estar no seu nome.</p>
        </div>
        <div className="flex flex-col w-96 justify-center items-start space-y-2">
          <div className="group transition ease-in duration-200 w-full flex items-center justify-between gap-10 bg-white px-6 py-4 rounded-md text-gray-500 cursor-pointer hover:bg-primary hover:text-white hover:scale-105">
            <p>Banco: </p>
            <p className="flex items-center gap-2">
              352 (Toro) 
              <Copy size={24} className="transition ease-in text-primary group-hover:text-white" weight="light" />
            </p>
          </div>
          <div className="group transition ease-in duration-200 w-full flex items-center justify-between gap-10 bg-white px-6 py-4 rounded-md text-gray-500 cursor-pointer hover:bg-primary hover:text-white hover:scale-105">
            <p>Agência: </p>
            <p className="flex items-center gap-2">
              0001
              <Copy size={24} className="transition ease-in text-primary group-hover:text-white" weight="light" />
            </p>
          </div>
          <div className="group transition ease-in duration-200 w-full flex items-center justify-between gap-10 bg-white px-6 py-4 rounded-md text-gray-500 cursor-pointer hover:bg-primary hover:text-white hover:scale-105">
            <p>Conta corrente: </p>
            <p className="flex items-center gap-2">
              912391-3
              <Copy size={24} className="transition ease-in text-primary group-hover:text-white" weight="light" />
            </p>
          </div>
          <div className="group transition ease-in duration-200 w-full flex items-center justify-between gap-10 bg-white px-6 py-4 rounded-md text-gray-500 cursor-pointer hover:bg-primary hover:text-white hover:scale-105">
            <p>Seu CPF:</p>
            <p className="flex items-center gap-2">
              085.236.114-95
              <Copy size={24} className="transition ease-in text-primary group-hover:text-white" weight="light" />
            </p>
          </div>
          <div className="group transition ease-in duration-200 w-full flex items-center justify-between gap-10 bg-white px-6 py-4 rounded-md text-gray-500 cursor-pointer hover:bg-primary hover:text-white hover:scale-105">
            <p>Favorecido: </p>
            <p>Mesma titularidade</p>
          </div>
          <div className="group transition ease-in duration-200 w-full flex items-center justify-between gap-10 bg-white px-6 py-4 rounded-md text-gray-500 cursor-pointer hover:bg-primary hover:text-white hover:scale-105">
            <p>Saldo: </p>
            <p className="flex items-center gap-2">
              R$ 1000,00
              <EyeSlash size={24} className="transition ease-in text-primary group-hover:text-white" weight="light" />
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomeAuth;
