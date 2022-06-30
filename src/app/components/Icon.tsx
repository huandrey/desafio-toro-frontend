import React from 'react';

import {
  BellSimple,
  List,
  Copy as CopyPhosphor,
  EyeSlash as EyeSlashPhosphor,
  Eye as EyePhosphor,
} from 'phosphor-react';

export const Bell = () => (
  <BellSimple
    size={24}
    className="cursor-pointer"
    color="#111"
    weight="light"
  />
);

export const Hamburger = () => (
  <List size={24} className="cursor-pointer" color="#111" weight="light" />
);

export const Copy = () => (
  <CopyPhosphor
    size={24}
    className="transition ease-in text-primary group-hover:text-white"
    weight="light"
  />
);

export const EyeSlash = () => (
  <EyeSlashPhosphor
    size={24}
    className="transition ease-in text-primary group-hover:text-white"
    weight="light"
  />
);

export const Eye = () => (
  <EyePhosphor
    size={24}
    className="transition ease-in text-primary group-hover:text-white"
    weight="light"
  />
);
