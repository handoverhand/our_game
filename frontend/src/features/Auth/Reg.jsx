/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/Context';

function Reg() {
  const navigate = useNavigate();
  const [context, setContext] = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { login, password, checkPassword } = form;

    const response = await fetch('/api/auth/reg', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        login: login.value,
        password: password.value,
        checkPassword: checkPassword.value,
      }),
    });
    const data = await response.json();

    if (data.message === 'success') {
      await setContext({
        user: null,
        login: login.value,
        score: 0,
        gameScore: 0,
      });
      navigate('/game');
    } else {
      document.querySelector('.helpText').innerText = data.message;
    }
  }

  if (context.user === true) {
    navigate('/game');
  }

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <form
            action="/auth/reg"
            className="loginForm"
            onSubmit={handleSubmit}
            style={{ width: '80vw', marginBottom: '15vh' }}
          >
            <a href="/">
              <img src="/logo.png" alt="logo" width="400vw" />
            </a>{' '}
            <input
              type="text"
              name="login"
              className="form-control form-control-lg"
              placeholder="Логин"
            />
            <input
              type="password"
              name="password"
              className="form-control form-control-lg"
              placeholder="Пароль"
              style={{ marginTop: '10px', marginBottom: '10px' }}
            />
            <input
              type="password"
              name="checkPassword"
              className="form-control form-control-lg"
              placeholder="Потвердите пароль"
              style={{ marginTop: '10px', marginBottom: '10px' }}
            />
            <div className="helpText" style={{ color: 'red' }} />
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{
                marginTop: '30px',
                backgroundColor: 'violet',
                color: 'white',
              }}
            >
              Зарегистрироваться
            </button>
            <div>
              <button
                type="submit"
                onClick={() => navigate('/')}
                className="btn btn-primary btn-lg"
                style={{
                  marginTop: '30px',
                  backgroundColor: 'violet',
                  color: 'white',
                }}
              >
                Назад
              </button>
            </div>
          </form>
        </header>
      </div>
    </div>
  );
}

export default Reg;
