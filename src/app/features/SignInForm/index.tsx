import React, { FormEvent, useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../core/context/AuthContext';
import { useForms } from '../../../core/hooks';
import { Submit } from '../../components';

function SignInForm() {
  const { signIn } = useContext(AuthContext);
  const { fields, createFields } = useForms();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res: any = await signIn({ email: fields.email, password: fields.password });

    if (res?.statusCode === 400) {
      toast.error(res.message);
    }
  };

  const firstFields = {
    email: {
      id: 'email',
      name: 'email',
      type: 'email',
      label: 'E-mail ou CPF',
      value: fields.email,
      confirm: true,
    },
    password: {
      id: 'password',
      name: 'password',
      type: 'password',
      label: 'Senha',
      confirm: true,
      value: fields.password,
    },
  };

  return (
    <form className="w-96 mx-auto bg-white px-14 py-10 shadow-md rounded-lg" onSubmit={(e) => onSubmit(e)}>
      <h2 className="text-2xl w-90 font-bold mb-4 md:mb-10">
        Acesse sua conta Toro.
      </h2>
      {['email', 'password'].map((field) => createFields(field, firstFields))}
      <div className="w-full my-5">
        <a className="text-primary underline" href="*">
          Esqueceu sua senha?
        </a>
      </div>
      <Submit type="full" label="Entrar" />
    </form>
  );
}

export default SignInForm;
