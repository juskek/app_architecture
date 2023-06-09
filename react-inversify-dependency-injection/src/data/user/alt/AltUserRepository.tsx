import { injectable } from "inversify";
import { IUserRepository } from "../IUserRepository";
import { User } from "../User";
import { Parsers } from "../Parsers";
import { AltDataStoreResponse } from "./AltDataStoreResponse";

@injectable()
export class AltUserRepository implements IUserRepository {
  async get(id: string): Promise<User | null> {
    try {
      const response = await fetch(`https://random-data-api.com/api/users/random_user?id=${id}`);
       if (!response.ok) throw new Error(response.statusText);
      
       const json = await response.json();
       const data = json as AltDataStoreResponse;
       const user = Parsers.randomUserAlt(data);
       return user;
    } catch (e) {
      throw Error(`Error in UserRepository2 calling get with id ${id}: ${e}`);
    }
  }
}