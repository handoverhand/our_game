/* eslint-disable default-param-last */

const TopReducer = (state = { top: [] }, action) => {
  switch (action.type) {
    case 'ADD_TOP':
      return { ...state, top: action.payload };
    default:
      return state;
  }
};

export default TopReducer;
