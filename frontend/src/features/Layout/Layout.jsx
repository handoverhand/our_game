import React from 'react';
import { Outlet } from 'react-router-dom';
// import UserContext from '../Context/Context';

function Layout() {
  async function logout() {
    await fetch('/api/auth/logout');
  }
  return (
    <div className="">
      <div className="header">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a href="/">
              <img src="/logo.png" alt="logo" width="200vw" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Переключатель навигации">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/lk" style={{ color: '#4520AB' }}>Личный кабинет</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/topgamers" style={{ color: '#4520AB' }}>Топ лидеров</a>
                </li>
                <li className="nav-item">
                  <li><a onClick={logout} className="nav-link" href="/" style={{ color: '#4520AB' }}>Выйти</a></li>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
