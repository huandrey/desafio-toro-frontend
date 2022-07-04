import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Field } from '../src/app/components';
import scale from '../assets/scale.svg';
import { Header } from '../src/app/features';

const Signup: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data: any) => console.log(data);

  const firstFields = [
    {
      id: 'fname',
      name: 'fname',
      type: 'text',
      label: 'Nome Completo',
      validation: {
        required: true,
        maxLength: 20,
      },
    },
    {
      id: 'email',
      name: 'email',
      type: 'email',
      label: 'E-mail',
      validation: {
        required: 'required',
        pattern: {
          value: /\S+@\S+\.\S+/,
          message: 'Endereço de e-mail inválido.',
        },
      },
    },
  ];

  const lastFields = [
    {
      id: 'cpf',
      name: 'cpf',
      type: 'text',
      label: 'CPF',
      validation: {},
    },
    {
      id: 'password',
      name: 'password',
      type: 'text',
      label: 'password',
      validation: {},
    },
  ];

  return (
    <>
      <Header />
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
          <form className="lg:w-full" onSubmit={handleSubmit(onSubmit)}>
            {firstFields.map(({
              id, name, type, label, validation,
            }) => (
              <Field
                key={id}
                id={id}
                name={name}
                type={type}
                label={label}
                register={register}
                error={errors[name]}
                validation={validation}
              />
            ))}
            <div className="flex items-center gap-5">
              {lastFields.map(({
                id, name, type, label,
              }) => (
                <Field
                  key={id}
                  id={id}
                  name={name}
                  type={type}
                  label={label}
                  register={register}
                  error={errors[name]}
                />
              ))}
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="pt-10 pb-4">
                Ao continuar, você está de acordo com a nossa
                {' '}
                <a className="text-primary underline" href="*">
                  Política de Privacidade.
                </a>
              </p>
            </div>
            <input
              type="submit"
              className="w-full px-8 py-4 rounded bg-primary md:w-fit text-white font-medium uppercase text-sm"
            />
          </form>
        </div>
        <div className="hidden lg:block p-10 bg-primaryDark lg:w-2/5 space-y-4">
          <Image src={scale} alt="" />
          <h4 className="text-white text-2xl font-bold">
            Investir com a Toro é fácil, seguro e tem Corretagem Zero.
          </h4>
          <ul className="py-3 px-5 space-y-3">
            <li className="list-disc text-white">
              Corretagem Zero para investir em qualquer ativo: ações,
              minicontratos, FIIs, ETFs e mais.
            </li>
            <li className="list-disc text-white">
              Receba Cashback investindo em Fundos de Investimento.
            </li>
            <li className="list-disc text-white">
              Somos autorizados pelo Banco Central e já ajudamos mais de R$ 100
              Bilhões a serem movimentados.
            </li>
          </ul>
          <p className=" text-white">O cadastro é 100% seguro e gratuito.</p>
        </div>
      </div>
    </>
  );
};

export default Signup;
