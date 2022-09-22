// Стартовое значение для cardReducer
const initialState = {
  card: true,
  error: null,
};

// Action types — переменные
const types = {
  SET_CARD: 'SET_CARD',
  SET_CARD_REJECTED: 'SET_CARD_REJECTED',
};

// Action creators — AC-функции
const actions = {
  setCard: (card) => ({ type: types.SET_CARD, payload: card }),
  setCardRejected: (message) => ({ type: types.SET_CARD_REJECTED, payload: message }),
};

// Reducer — чистая (pure) функция
// eslint-disable-next-line default-param-last
function cardReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_CARD: {
      const newCard = action.payload;
      const newState = { // первый уровень вложенности — внутри изменение (мб не одно)
        // ...state,
        card: newCard,
        error: null,
      };
      return newState;
    }

    case types.SET_CARD_REJECTED: {
      const message = action.payload;
      const newState = {
        ...state,
        error: message,
      };
      return newState;
    }

    default: {
      return state;
    }
  }
}

// Экспорты
export default cardReducer;
export { initialState };
export const {
  setCard,
  setCardRejected,
} = actions;
