import React from 'react';
import NextHead from 'next/head';

interface HeadProps {
  title: string;
}

function Head({ title }: HeadProps) {
  return (
    <NextHead>
      <title>
        {title}
      </title>
    </NextHead>
  );
}

export default Head;
