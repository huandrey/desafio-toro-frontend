import { getToken } from '../utils/local';
import { makeAxiosHttpClient } from './api';

export const Account = {
  getInfo: async (userId: string) => makeAxiosHttpClient().request({
    url: `/account/${userId}`,
    method: 'get',
    headers: { Authorization: `Bearer ${getToken()}` },
  }),
};
