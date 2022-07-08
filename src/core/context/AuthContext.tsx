import React, {
  createContext, ReactNode, useEffect, useMemo, useState,
} from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';
import { Auth } from '../services/auth.service';
import { HttpResponse } from '../services/protocols/httpClient';

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  cpf: string;
}

export interface SignInCredentials {
  email: string
  password: string
}

export type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<HttpResponse<any>>
  isAuthenticated?: boolean
  user: User | null;
  logout?: () => void;
};

type AuthProviderProps = {
  children: ReactNode
};

export const AuthContext = createContext({} as AuthContextData);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies();
    if (token) {
      Auth.recoveryUserData().then((res) => {
        setUser(res?.data);
      });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    const res = await Auth.signIn({ email, password });
    if (res.statusCode === 200) {
      setCookie(undefined, 'nextauth.token', res?.data?.token, {
        maxAge: 8600,
      });

      setUser(res?.data?.user);

      Router.push('/home');
    }
    return res;
  }

  function logout() {
    Router.push('/');
    destroyCookie(null, 'nextauth.token');
    setUser(null);
  }

  const AuthContextValues = useMemo(
    () => ({
      signIn, isAuthenticated, user, logout,
    }),
    [signIn, isAuthenticated, user, logout],
  );

  return (
    <AuthContext.Provider value={AuthContextValues}>
      {children}
    </AuthContext.Provider>
  );
}
