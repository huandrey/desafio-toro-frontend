import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AccountProvider, AuthProvider } from '../src/core/context';

const customTheme = extendTheme({
  components: {
    Table: {
      variants: {
        mytable: {
          tr: {
            _odd: {
              background: '!important green.800',
            },
          },
          td: {
            _odd: {
              background: '!important green.800',
            },
          },
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AccountProvider>
        <ChakraProvider theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </AccountProvider>
    </AuthProvider>
  );
}

export default MyApp;
