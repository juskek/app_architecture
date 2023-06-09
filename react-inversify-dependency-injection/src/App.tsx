import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './data/user/User';
import { SYMBOLS, container } from './ioc/IOCContainer';
import { IUserRepository } from './data/user/IUserRepository';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const userRepository = container.get<IUserRepository>(SYMBOLS.UserRepository);


  const onButtonClick = async () => {
    const res = await userRepository.get("12345");
    setUser(res);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        Getting data from: {userRepository.constructor.name}
        {user && <code>{JSON.stringify(user)}</code>}

        <button onClick={onButtonClick}>Get user</button>
      </header>
    </div>
  );
}

export default App;
