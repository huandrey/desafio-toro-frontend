import { makeAxiosHttpClient } from './api';
import { UserDTO } from './protocols/UserDTO';

export const Auth = {
  signIn: async (body: any) => makeAxiosHttpClient().request({
    url: '/session',
    method: 'post',
    body,
  }),
  signUp: async (body: UserDTO) => makeAxiosHttpClient().request({
    url: '/users',
    method: 'post',
    body,
  }),
  recoveryUserData: async () => makeAxiosHttpClient().request({
    url: '/users/recovery-data',
    method: 'post',
  }),
};
