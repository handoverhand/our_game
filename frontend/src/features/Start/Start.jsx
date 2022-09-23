import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/Context';

function Start() {
  const navigate = useNavigate();
  const [context] = useContext(UserContext);
  // console.log(context);
  if (context.user === true) {
    navigate('/game');
  }
  return (
    <>
      {context.user === null && (
      <div style={{ display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center', columnGap: '1em' }}>
        <div className="spinner-grow text-primary" role="status" style={{ backgroundColor: 'violet' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-primary" role="status" style={{ backgroundColor: 'violet' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-primary" role="status" style={{ backgroundColor: 'violet' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      )}
      {context.user === false && (
      <div className="App">
        <header className="App-header">
          <a href="/">
            <img src="/logo.png" alt="logo" width="700vw" />
          </a>
          <button type="button" onClick={() => navigate('/reg')} className="btn btn-primary btn-lg" style={{ margin: '10px', backgroundColor: 'violet', color: 'white', width: '250px' }}>Зарегистрироваться</button>
          <button type="button" onClick={() => navigate('/log')} className="btn btn-primary btn-lg" style={{ margin: '15px', backgroundColor: 'violet', color: 'white', width: '250px' }}>Войти</button>
        </header>
      </div>
      )}
    </>
  );
}

export default Start;
