import { User } from "./User";

export interface IUserRepository {
    get(id: string): Promise<User | null>;

    /* Other data methods would exist here, e.g.
       getAll(): Promise<T[] | null>;
       create(entity: T): Promise<void>;
       update(entity: Partial<T>): Promise<void>;
       delete(id: string): Promise<void>;
    */
}