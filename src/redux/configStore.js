import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import productReducer from './Products/products';

const reducer = combineReducers({
  productReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
