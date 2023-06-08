

import { CURRENT_BASE_URL } from "../../config";
import { ApiResponse, transform } from "./ApiResponse";
import { HttpClient } from "./HttpClient";
import { IBaseRepository } from "./IBaseRepository";

export abstract class BaseRepository<T> extends HttpClient implements IBaseRepository<T> {
    protected collection: string;
  
    public async get(path: string): Promise<ApiResponse<T>> {
      const instance = this.createInstance();
      const result = await instance.get(`${CURRENT_BASE_URL}/${this.collection}/${path}`).then(transform);
      return result as ApiResponse<T>;
    }
  
    public async getMany(): Promise<ApiResponse<T[]>> {
      const instance = this.createInstance();
      const result = await instance.get(`${CURRENT_BASE_URL}/${this.collection}/`).then(transform);
      return result as ApiResponse<T[]>;
    }
  
    public async create(item: T): Promise<ApiResponse<T>> {
      const instance = this.createInstance();
      const result = await instance
        .post(`${CURRENT_BASE_URL}/${this.collection}/`, item)
        .then(transform);
      return result as ApiResponse<T>;
    }
  
    public async update(id: string, item: T): Promise<ApiResponse<T>> {
      const instance = this.createInstance();
      const result = await instance
        .put(`${CURRENT_BASE_URL}/${this.collection}/${id}`, item)
        .then(transform);
      return result as ApiResponse<T>;
    }
  
    public async delete(id: any): Promise<ApiResponse<T>> {
      const instance = this.createInstance();
      const result = await instance
        .delete(`${CURRENT_BASE_URL}/${this.collection}/${id}`)
        .then(transform);
      return result as ApiResponse<T>;
    }
  }
  