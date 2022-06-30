import React, { ButtonHTMLAttributes, FunctionComponent, PropsWithChildren } from 'react';
import styles from './Button.module.css';

type Variants = 'primary' | 'secondary' | 'mixed';
type ButtonProps = {
  variant?: Variants;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const VariantMap = {
  primary: styles.primary,
  secondary: styles.secondary,
  mixed: styles.mixed,
};

const Button: FunctionComponent<ButtonProps> = (props: PropsWithChildren<ButtonProps>) => {
  const { variant = 'primary', children, ...otherProps } = props;
  const className: string[] = [styles.root, VariantMap[variant]];

  return (
    <button {...otherProps} className={className.join(' ')}>
      {children}
    </button>
  );
};

export default Button;
