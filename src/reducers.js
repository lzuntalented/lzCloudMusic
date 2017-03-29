import { createStore,combineReducers } from 'redux'
import lzlog from './utils';

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counter(state = {idx: 0,
list: []}, action) {
  // lzlog(action)
  switch (action.type) {
  case 'INCREMENT':
    return {
      idx: action.idx,
      list: action.list
    };
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}


function counter1(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

function reducer(state = {count:0},action){
  // lzlog('reducer',action)
  const count = state.count;
  switch (action.type) {
    case "get_banner":
        return {count:count+1};
      break;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  counter1,
  counter,
  reducer
})
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(todoApp)

export default store;
//
// // You can use subscribe() to update the UI in response to state changes.
// // Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// // However it can also be handy to persist the current state in the localStorage.
//
// store.subscribe(() =>
//   console.log(store.getState())
// )
//
// // The only way to mutate the internal state is to dispatch an action.
// // The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'INCREMENT' })
// // 1
// store.dispatch({ type: 'INCREMENT' })
// // 2
// store.dispatch({ type: 'DECREMENT' })
// 1
