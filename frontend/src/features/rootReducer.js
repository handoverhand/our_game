import { combineReducers } from 'redux';
import TopReducer from './TopGame/TopReducer';
import cardReducer from './Game/gameReducer';

const rootReducer = combineReducers({
  topState: TopReducer,
  cardState: cardReducer
});

export default rootReducer;
