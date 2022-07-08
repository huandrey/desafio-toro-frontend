import { makeAxiosHttpClient } from './api';

export const Account = {
  getInfo: async (userId: string) => makeAxiosHttpClient().request({
    url: `/account/${userId}`,
    method: 'get',
  }),
  create: async (userId: string, token?: string) => makeAxiosHttpClient().request({
    url: `/account/${userId}`,
    method: 'post',
    headers: { Authorization: `Bearer ${token}` },
  }),
};
