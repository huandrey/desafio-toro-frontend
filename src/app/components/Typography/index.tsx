import React, {
  DetailedHTMLProps,
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';
import { Url } from 'url';
import styles from './Typography.module.css';

type Variants = 'primary' | 'secondary' | 'mixed';
type Types = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'ancora';

type TypographyProps = {
  type: Types
  variant?: Variants
  href?: Url
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const VariantMap = {
  primary: styles.primary,
  secondary: styles.secondary,
  mixed: styles.mixed,
};

export const Ancora: FunctionComponent<TypographyProps> = (
  props: PropsWithChildren<TypographyProps>,
) => {
  const { variant = 'primary', children, ...otherProps } = props;
  const className: string[] = [styles.root, styles.ancora, VariantMap[variant]];

  // h4 por pura simplificacao de tipos
  return (
    <h4 {...otherProps} className={className.join(' ')}>
      {children}
    </h4>
  );
};

export const Subtitle: FunctionComponent<TypographyProps> = (
  props: PropsWithChildren<TypographyProps>,
) => {
  const { variant = 'primary', children, ...otherProps } = props;
  const className: string[] = [styles.root, styles.h5, VariantMap[variant]];

  return (
    <h5 {...otherProps} className={className.join(' ')}>
      {children}
    </h5>
  );
};

export default { Ancora };
