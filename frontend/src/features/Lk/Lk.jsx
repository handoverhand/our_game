/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { use } from '../../../../backend/routes/api/authRouteApi';
import UserContext from '../Context/Context';
import Page404 from '../Error/Page404';
import './Lk.css';

function Lk() {
  const navigate = useNavigate();
  const [context] = useContext(UserContext);
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
        <>
          <h1 className="Lk">Личный кабинет</h1>
          <div className="div-lk">
            <div>Имя: </div>
            <h5>{context.login}</h5>
            <div>Лучший результат: </div>
            <h5>{context.score}</h5>
          </div>
          <button type="button" onClick={() => navigate('/game')} className="btn btn-primary  btn-lk" style={{ margin: '30px', backgroundColor: '#4520AB', color: '#29EDFF' }}>Назад</button>
        </>
      )}
      {context.user === false && <Page404 />}
    </div>
  );
}

export default Lk;
