/* eslint-disable react/prop-types */
import React, { useReducer, useEffect } from 'react';
import Game from '../Game/Game';
import countdownReducer, {
  initialState,
  setStartValue,
  setValue,
  decrementValue,
} from './countdownReducer';

function Countdown({ title }) {
  const [state, dispatch] = useReducer(countdownReducer, initialState);
  const { startValue, value } = state;

  // Функция для обработки изменений в контролируемом поле.
  const changeStartValue = (event) => {
    const n = event.target.valueAsNumber;
    const action = setStartValue(n);
    dispatch(action);
  };

  // Функция перезапуска при отправке формы.
  const restartCountdown = (event) => {
    event.preventDefault();
    const action = setValue(startValue);
    dispatch(action);
  };

  // Функция-эффект с очисткой (антиэффектом).
  const runCountdownEffect = () => {
    if (value <= 0) return undefined;

    const decrement = () => dispatch(decrementValue());
    const id = setInterval(decrement, 1000);
    const stopCountdownEffect = () => clearInterval(id); // функция-антиэффект

    return stopCountdownEffect;
  };

  // Функция-эффект запустится при изменении переменной value.
  useEffect(runCountdownEffect, [value]);

  // Рендер компонента в React-элемент.
  return (
    <Game title={title}>
      <p>{value || 'Время истекло'}</p>

      <form onSubmit={restartCountdown} className="countdown">
        <button type="submit">Запустить</button>

        {/* <label> */}
        <span>обратный отсчёт на</span>
        {' '}
        <input type="number" value={startValue} onChange={changeStartValue} />
        {' '}
        <span>секунд</span>
        {' '}
        <small>(да-да, это контролируемое поле!)</small>
        {/* </label> */}
      </form>
    </Game>
  );
}

export default Countdown;
