import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'store/reducers';

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
