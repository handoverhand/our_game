// импорт функции на основе которой будет создаваться store
import { createStore } from 'redux';

// подключение вспомогательной функции, для отображения store в браузере
import { composeWithDevTools } from 'redux-devtools-extension';

// импорт reducer'a
import rootReducer from './rootReducer';

// формирование контейнера состояний (store)
const store = createStore(rootReducer, composeWithDevTools());

// экспортируем контейнер
export default store;
