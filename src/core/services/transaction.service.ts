import { makeAxiosHttpClient } from './api';

export const Transaction = {
  get: async (token?: string) => makeAxiosHttpClient().request({
    url: '/spb/events',
    method: 'get',
    headers: { Authorization: `Bearer ${token}` },
  }),
};
