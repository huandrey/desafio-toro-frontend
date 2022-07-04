import React, {
  createContext, ReactNode, useEffect, useMemo, useState,
} from 'react';
import Cookies from 'js-cookie';
import { Auth } from '../services/auth.service';
import { saveLocal } from '../utils/local';

type SignInCredentials = {
  email: string
  password: string
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  isAuthenticated: boolean
  user: any;
};

type AuthProviderProps = {
  children: ReactNode
};

export const AuthContext = createContext({} as AuthContextData);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({});

  // console.log(user);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(Cookies.get('token'));
    if (typeof window !== 'undefined') {
      const { user: storagedUser } = JSON.parse(localStorage.getItem('state'));

      setUser(storagedUser);
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    setIsAuthenticated((prev) => !prev);
    const { data } = await Auth.signIn({ email, password });
    Cookies.set('token', data.token);
    saveLocal('user', data.user);
    saveLocal('isAuthenticated', true);
  }

  const AuthContextValues = useMemo(
    () => ({ signIn, isAuthenticated, user }),
    [signIn, isAuthenticated, user],
  );

  return (
    <AuthContext.Provider value={AuthContextValues}>
      {children}
    </AuthContext.Provider>
  );
}
