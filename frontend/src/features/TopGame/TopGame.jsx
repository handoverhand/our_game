import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddTop from './TopGameAC';

function TopGame() {
  const navigate = useNavigate();
  const state = useSelector((top) => top.topState.top.top);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('/api/top')
      .then((res) => res.json())
      .then((data) => dispatch(AddTop(data)));
  }, []);

  return (
    <div>
      <div>Топ Лидеров</div>
      <ol>
        {state && state.map((top) => <li key={top.id}>{`${top.login}   ${top.score}`}</li>)}
      </ol>
      <button type="button" onClick={() => navigate('/game')} className="btn btn-primary  btn-lk" style={{ margin: '30px', backgroundColor: '#4520AB', color: '#29EDFF' }}>Назад</button>
    </div>
  );
}

export default TopGame;
