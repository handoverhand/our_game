/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Login from './Auth/Login';
import Start from './Start/Start';
import Lk from './Lk/Lk';
import Page404 from './Error/Page404';
import UserContext from './Context/Context';
import Layout from './Layout/Layout';
import Reg from './Auth/Reg';
import Game from './Game/Game';
import TopGame from './TopGame/TopGame';

function App() {
  const [context, setContext] = useState({
    user: null,
    login: null,
    score: null,
  });

  useEffect(() => {
    fetch('api/')
      .then((result) => result.json())
      .then((data) => {
        const id = setTimeout(() => {
          setContext({
            user: data.isAdmin,
            login: data.login,
            score: data.score,
            gameScore: 0,
          });
          clearTimeout(id);
        }, 1800);
      });
  }, []);

  return (
    <UserContext.Provider value={[context, setContext]}>
      <Routes>
        <Route index element={<Start />} />
        <Route path="/lk" element={<Lk />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/log" element={<Login />} />
        <Route path="/topgamers" element={<TopGame />} />
        <Route path="/" element={<Layout />}>
          <Route path="/game" element={<Game />} />
        </Route>
        <Route path="/error" element={<Page404 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
