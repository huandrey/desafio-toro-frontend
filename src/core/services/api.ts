import axios, { AxiosResponse } from 'axios';
import { parseCookies } from 'nookies';
import { HttpResponse, HttpClient, HttpRequest } from './protocols/httpClient';

class AxiosHttpClient implements HttpClient<any> {
  // eslint-disable-next-line class-methods-use-this
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    const { 'nextauth.token': token } = parseCookies();
    try {
      axiosResponse = await axios.request({
        url: `${process.env.API_URL}${data.url}`,
        method: data.method,
        data: data.body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      axiosResponse = error.response;
    }

    return { ...axiosResponse.data, statusCode: axiosResponse.status };
  }
}

export const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient();
