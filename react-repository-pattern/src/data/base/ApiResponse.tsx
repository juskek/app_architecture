import { AxiosResponse } from 'axios';

export class ApiResponse<T> {
    data: T;
    errors?: any;
}

export const transform = (response: AxiosResponse): Promise<ApiResponse<any>> => {
    return new Promise((resolve, reject) => {
      const result: ApiResponse<any> = {
        data: response.data,
        errors: response.data.errors
      };
      resolve(result);
    });
  };