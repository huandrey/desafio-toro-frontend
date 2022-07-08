import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import scale from '../src/assets/scale.svg';
import { Header, SignUpForm } from '../src/app/features';
import 'react-toastify/dist/ReactToastify.css';
import { signUpBenefits } from '../src/core/constants';

const Signup: NextPage = () => (
  <>
    <Header />
    <ToastContainer />
    <div className="max-w-7xl mx-auto flex py-16 px-6 space-x-28">
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl w-90 md:text-4xl font-bold mb-4 md:mb-10">
          Cadastre-se grátis
          {' '}
          <p className="hidden md:inline">para investir</p>
        </h2>
        <a className="text-primary text-sm underline md:hidden" href="*">
          Conheça as vantagens da Toro
        </a>
        <SignUpForm />
      </div>
      <div className="hidden lg:block p-10 bg-primaryDark lg:w-2/5 space-y-4">
        <Image src={scale} alt="" />
        <h4 className="text-white text-2xl font-bold">
          Investir com a Toro é fácil, seguro e tem Corretagem Zero.
        </h4>
        <ul className="py-3 px-5 space-y-3">
          {signUpBenefits.map((benefit: string) => (
            <li className="list-disc text-white">
              {benefit}
            </li>
          ))}
        </ul>
        <p className=" text-white">O cadastro é 100% seguro e gratuito.</p>
      </div>
    </div>
  </>
);

export default Signup;
