import { combineReducers } from 'redux';
import { todoReducer } from './todos';
import { filterReducer } from './filters';

export const rootReducer = () => combineReducers({
  todoReducer,
  filterReducer
});
