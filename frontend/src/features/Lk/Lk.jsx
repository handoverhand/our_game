/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
import { React, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/Context';
import Page404 from '../Error/Page404';

function Lk() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [context] = useContext(UserContext);

  async function userEdit(event) {
    event.preventDefault();
    const login = event.target.login.value;
    const password = event.target.password.value;
    const repeatPassword = event.target.repeatPassword.value;

    if (password === repeatPassword) {
      const response = await fetch('/lk/newPassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });
      const result = await response.json();
      if (result.update === true) {
        navigate('/game');
      } else {
        setMessage(result.update);
      }
    } else {
      setMessage('Пароли не совпадают');
    }
  }

  return (
    <div>
      {context.user === null && (
      <div style={{ display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center', columnGap: '1em' }}>
        <div className="spinner-grow text-primary" role="status" style={{ backgroundColor: '#4520AB' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-primary" role="status" style={{ backgroundColor: '#4520AB' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-primary" role="status" style={{ backgroundColor: '#4520AB' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      )}
      {context.user === true && (
      <div className="App">
        <header className="App-header">
          <form action="/lk" className="loginChangeForm" onSubmit={userEdit} style={{ width: '80vw' }}>
            <h1 style={{ color: '#4520AB', fontSize: '50px', margin: '5vh' }}>Личный кабинет</h1>
            <h4 style={{ color: '#4520AB' }}>Редактирование пользователя:</h4>
            <input type="text" name="login" className="form-control form-control-lg" placeholder="Логин" />
            <input type="password" name="password" className="form-control form-control-lg" placeholder="Пароль" style={{ marginTop: '10px', marginBottom: '10px' }} />
            <input type="password" name="repeatPassword" className="form-control form-control-lg" placeholder="Повторите пароль" style={{ marginTop: '10px', marginBottom: '10px' }} />
            <div className="helpText" style={{ color: 'red' }} />
            <button type="submit" className="btn btn-primary btn-lg" style={{ margin: '30px', backgroundColor: '#4520AB', color: '#29EDFF' }}>Изменить</button>
          </form>
          <button type="button" onClick={() => navigate('/game')} className="btn btn-primary btn-lg" style={{ margin: '30px', backgroundColor: '#4520AB', color: '#29EDFF' }}>Назад</button>
          <div style={{ color: '#4520AB' }}>{message}</div>
        </header>
      </div>
      )}
      {context.user === false && <Page404 />}
    </div>
  );
}

export default Lk;
