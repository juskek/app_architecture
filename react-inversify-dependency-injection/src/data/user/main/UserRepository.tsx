import { injectable } from "inversify";
import { IUserRepository } from "../IUserRepository";
import { User } from "../User";
import { DataStoreResponse } from "./DataStoreResponse";
import { Parsers } from "../Parsers";

@injectable()
export class UserRepository implements IUserRepository {  
  async get(id: string): Promise<User | null> {
    try {
        const response = await fetch(`https://randomuser.me/api?id=${id}`);
        if (!response.ok) throw new Error(response.statusText);

        const json = await response.json();
        const data = json as {
           results: DataStoreResponse[];
        }
        const user = Parsers.randomUser(data);
        
        return user;
      } catch (e) {
         throw Error(`Error in UserRepository calling get with id ${id}: ${e}`);
      }
  }
}