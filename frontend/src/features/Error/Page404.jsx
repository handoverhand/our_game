/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';

function Page404() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div>
            <a href="/">
              <img src="/logo.png" alt="logo" width="300vw" />
            </a>
            <h1 style={{ color: '#4520AB' }}>
              Что-то пошло не так
              {' '}
            </h1>
            <a href="/" style={{ color: '#4520AB' }}>На главную</a>
          </div>
        </header>
      </div>
    </>
  );
}

export default Page404;
