import React from 'react';
import { render } from '@testing-library/react';
import { AccountList } from '../index';

jest.mock('next/link', () => ({ children }) => children); jest.mock('next/image', () => ({ children }) => children);

describe('Check AccountList render correctly', () => {
  it('should be visible all titles in list of the account list', () => {
    const data = {
      bank: 352,
      agency_number: '0001',
      account_number: '4343432',
      balance: '90.00',
    };

    const { getByText } = render(
      <AccountList data={data} />,
    );

    expect(getByText('Banco:')).toBeInTheDocument();
    expect(getByText('Agencia:')).toBeInTheDocument();
    expect(getByText('Conta:')).toBeInTheDocument();
    expect(getByText('Saldo:')).toBeInTheDocument();
  });

  it('should be visible all values without mask in list of the account list', () => {
    const data = {
      bank: 352,
      agency_number: '0001',
      account_number: '4343432',
      balance: '',
    };

    const { getByText } = render(
      <AccountList data={data} />,
    );

    expect(getByText('352')).toBeInTheDocument();
    expect(getByText('0001')).toBeInTheDocument();
    expect(getByText('4343432')).toBeInTheDocument();
  });

  it('should not be visible balance when page renders', () => {
    const data = {
      bank: 352,
      agency_number: '',
      account_number: '',
      balance: '90.87',
    };

    const { getByText } = render(
      <AccountList data={data} />,
    );

    expect(getByText('***')).toBeInTheDocument();
  });
});
