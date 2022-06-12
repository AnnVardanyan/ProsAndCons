import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import * as reducers from './reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const middlewares = [];

const store = createStore(
  combineReducers(reducers),
  devTools ? compose(applyMiddleware(...middlewares), devTools) : applyMiddleware(...middlewares),
);


export default store;