import React, { FormEvent, useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../core/context/AuthContext';
import { useForms } from '../../../core/hooks';
import { Auth } from '../../../core/services/auth.service';
import { cleanCpfFormat, cpfCnpjFormatMask } from '../../../core/utils/mask';
import { Submit } from '../../components';

function SignUpForm() {
  const { signIn } = useContext(AuthContext);
  const { fields, createFields } = useForms();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const [fname, lname] = fields.fname.split(' ');

    const userDTO = {
      fname,
      lname: lname || '',
      cpf: cleanCpfFormat(fields.cpf),
      email: fields.email,
      password: fields.password,
    };

    const res: any = await Auth.signUp(userDTO);

    if (res.statusCode === 400) {
      toast.error(res.message);
    } else if (res.statusCode === 201) {
      await signIn({ email: userDTO.email, password: userDTO.password });
    }
  };

  const firstFields = {
    fname: {
      id: 'fname',
      name: 'fname',
      type: 'text',
      label: 'Nome Completo',
      value: fields.fname,
      confirm: true,
    },
    email: {
      id: 'email',
      name: 'email',
      type: 'email',
      label: 'E-mail',
      value: fields.email,
      confirm: true,
    },
    cpf: {
      id: 'cpf',
      name: 'cpf',
      type: 'text',
      label: 'CPF',
      maxLength: 14,
      value: cpfCnpjFormatMask(fields.cpf),
      confirm: true,
    },
    password: {
      id: 'password',
      name: 'password',
      type: 'password',
      label: 'Senha (6 a 16 caracteres):',
      value: fields.password,
      confirm: true,
    },
  };

  return (
    <form className="lg:w-full" onSubmit={onSubmit}>
      {['fname', 'email'].map((field) => createFields(field, firstFields))}
      <div className="flex items-start gap-5">
        {['cpf', 'password'].map((field) => createFields(field, firstFields))}
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
      <Submit type="fit" label="Continuar" />
    </form>
  );
}

export default SignUpForm;
