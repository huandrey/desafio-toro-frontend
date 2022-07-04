import { makeAxiosHttpClient } from './api';

export const Auth = {
  signIn: async (body: any) => makeAxiosHttpClient().request({
    url: '/session',
    method: 'post',
    body,
  }),
};
