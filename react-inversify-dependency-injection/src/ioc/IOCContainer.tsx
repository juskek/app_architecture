import { Container } from "inversify";
import { UserRepository } from "../data/user/main/UserRepository";
import { AltUserRepository } from "../data/user/alt/AltUserRepository";



type Env = 'main' | 'alt';

const ENV: Env = 'main';

export const SYMBOLS = {
    UserRepository: Symbol.for("UserRepository"),
    /* Other services would live here, e.g. ORDER_REPOSITORY */
};

const _container = new Container();

// If in alt environment, use AltUserRepository, else use UserRepository
switch (ENV as Env) {
    case 'main':
        _container.bind(SYMBOLS.UserRepository).to(UserRepository).inSingletonScope();
        break;

    case 'alt':
        _container.bind(SYMBOLS.UserRepository).to(AltUserRepository).inSingletonScope();
        break;

    default:
        break;
}




export const container = _container;
