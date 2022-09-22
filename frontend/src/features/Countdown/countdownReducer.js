const initialState = {
  startValue: 5,
  value: 5,
};

const types = {
  SET_START_VALUE: 'SET_START_VALUE',
  SET_VALUE: 'SET_VALUE',
  DECREMENT_VALUE: 'DECREMENT_VALUE',
};

const actions = {
  setStartValue: (n) => ({ type: types.SET_START_VALUE, payload: n }),
  setValue: (n) => ({ type: types.SET_VALUE, payload: n }),
  decrementValue: () => ({ type: types.DECREMENT_VALUE }),
};

// eslint-disable-next-line default-param-last
function countdownReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_START_VALUE: {
      const newStartValue = action.payload;
      const newState = { ...state, startValue: newStartValue };
      return newState;
    }

    case types.SET_VALUE: {
      const newValue = action.payload;
      const newState = { ...state, value: newValue };
      return newState;
    }

    case types.DECREMENT_VALUE: {
      const newState = { ...state, value: state.value - 1 };
      return newState;
    }

    default: {
      return state;
    }
  }
}

export default countdownReducer;
export { initialState };
export const { setStartValue, setValue, decrementValue } = actions;
