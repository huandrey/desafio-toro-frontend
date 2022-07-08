import React, { InputHTMLAttributes, PropsWithChildren } from 'react';
import styles from './Submit.module.css';

type Types = 'fit' | 'full';
type SubmitProps = {
  label: string;
  loading?: boolean;
  type?: Types;
} & InputHTMLAttributes<HTMLButtonElement>;

const TypesMap = {
  fit: styles.fit,
  full: styles.full,
};

function Submit(props: PropsWithChildren<SubmitProps>) {
  const {
    type = 'full', label, loading, children, ...otherProps
  } = props;
  const className: string[] = [styles.root, TypesMap[type]];

  return (
    <input
      className={className.join(' ')}
      {...otherProps}
      type="submit"
      value={label}
    />
  );
}

export default Submit;
