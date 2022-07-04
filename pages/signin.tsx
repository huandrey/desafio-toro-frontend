import React, { FormEvent, useContext } from 'react';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { Field } from '../src/app/components';
import { Header } from '../src/app/features';
import { AuthContext } from '../src/core/context/AuthContext';

const Signin: NextPage = () => {
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const { signIn } = useContext(AuthContext);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = getValues();
    signIn({ email, password });
  };

  const firstFields = [
    {
      id: 'email',
      name: 'email',
      type: 'email',
      label: 'E-mail ou CPF',
    },
    {
      id: 'password',
      name: 'password',
      type: 'password',
      label: 'Senha',
    },
  ];

  return (
    <div className="h-screen bg-gray-100">
      <Header />
      <div className="max-w-7xl mx-auto flex py-16">

        <form className="w-96 mx-auto bg-white px-14 py-10 shadow-md rounded-lg" onSubmit={(e) => onSubmit(e)}>
          <h2 className="text-2xl w-90 font-bold mb-4 md:mb-10">
            Acesse sua conta Toro.
          </h2>
          {firstFields.map(({
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
          <div className="w-full my-5">
            <a className="text-primary underline" href="*">
              Esqueceu sua senha?
            </a>
          </div>
          <input
            type="submit"
            className="w-full px-8 py-4 rounded bg-primary text-white font-medium uppercase text-sm"
          />
          {' '}
        </form>
      </div>
    </div>
  );
};

export default Signin;
