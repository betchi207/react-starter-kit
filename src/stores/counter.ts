import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { counterReducer } from '../reducers/counter';

const middleware: Middleware[] = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export const counterStore = createStore(
  combineReducers({
    counterReducer
  }),
  applyMiddleware(...middleware)
);

export interface ICounterState {
  num: number;
  loadingCount: number;
}

export type CounterState = {
  counterReducer: ICounterState
};
