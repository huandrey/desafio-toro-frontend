import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '..';

jest.mock('next/link', () => ({ children }) => children); jest.mock('next/image', () => ({ children }) => children);

describe('Checks if boto receives children correctly.', () => {
  it('Check button renders correctly', () => {
    const { getByText } = render(
      <Header />,
    );

    expect(getByText('Bolsa')).toBeInTheDocument();
    expect(getByText('Mais Investimentos')).toBeInTheDocument();
    expect(getByText('Aprenda')).toBeInTheDocument();
    expect(getByText('Plataformas')).toBeInTheDocument();
    expect(getByText('Ajuda')).toBeInTheDocument();
  });

  // it('', () => {

  // })
});
