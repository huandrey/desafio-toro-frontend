import axios, { AxiosResponse } from 'axios';
import { HttpResponse, HttpClient, HttpRequest } from './protocols/httpClient';

class AxiosHttpClient implements HttpClient<any> {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: `${process.env.API_URL}${data.url}`,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error) {
      axiosResponse = error.response;
    }

    return axiosResponse.data;
  }
}

export const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient();
