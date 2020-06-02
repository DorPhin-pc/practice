import { createStore } from 'redux';
import { act } from 'react-dom/test-utils';

export default createStore(function (state, action) {
  if (state === undefined) {
    return { number: 0 };
  }
  if (action.type === 'INCREAMENT') {
    return { number: state.number + action.size };
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
