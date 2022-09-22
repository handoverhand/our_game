import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
import gameReducer from './features/Game/gameReducer';
// import countdownReducer from './features/countdown/countdownReducer';

// Комбинированный reducer
const rootReducer = combineReducers({
  game: gameReducer,
  // countdown: countdownReducer,
  title: () => 'Элбрус Квиз', // reducer-функция на минималках
});

// Хранилище (контейнер) для состояния
const store = createStore(rootReducer());
//  composeWithDevTools());

// store.dispatch()
// store.getState()

export default store;
