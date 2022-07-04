import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '..';

describe('Checks if boto receives children correctly.', () => {
  it('Check button renders correctly', () => {
    render(
      <Button variant="primary">
        Entrar
      </Button>,
    );

    expect(screen.getByText('Entrar')).toBeInTheDocument();
  });

  it('Adds primary class to button when called.', () => {
    render(
      <Button variant="primary">
        Entrar
      </Button>,
    );

    expect(screen.getByText('Entrar')).toHaveClass('primary');
  });
});
