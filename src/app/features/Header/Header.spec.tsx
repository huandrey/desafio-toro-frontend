import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '..';
import { AuthContext, AuthContextData } from '../../../core/context/AuthContext';

jest.mock('next/link', () => ({ children }) => children); jest.mock('next/image', () => ({ children }) => children);

function renderAuthContext(params: AuthContextData) {
  return render(
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ ...params }}>
      <Header />
    </AuthContext.Provider>,
  );
}

describe('Check header render correctly', () => {
  it('should be visible the menu texts in header', () => {
    const { getByText } = render(
      <Header />,
    );

    expect(getByText('Bolsa')).toBeInTheDocument();
    expect(getByText('Mais Investimentos')).toBeInTheDocument();
    expect(getByText('Aprenda')).toBeInTheDocument();
    expect(getByText('Plataformas')).toBeInTheDocument();
    expect(getByText('Ajuda')).toBeInTheDocument();
  });

  it('should be visible the name of the user in header if authenticated', () => {
    const user = {
      id: '',
      email: 'john.doe@mail.com',
      cpf: '12345678910',
      first_name: 'John',
      last_name: 'Doe',
    };
    const isAuthenticated = true;
    const signIn = () => Promise.resolve();

    renderAuthContext({ user, isAuthenticated, signIn });

    expect(screen.getByText('John')).toBeInTheDocument();
  });

  it('', () => {
    const user = {};
    const isAuthenticated = false;
    const signIn = () => Promise.resolve();

    renderAuthContext({ user, isAuthenticated, signIn });

    expect(screen.getByText('Entrar')).toBeInTheDocument();
    expect(screen.getByText('Cadastre-se')).toBeInTheDocument();
  });
});
