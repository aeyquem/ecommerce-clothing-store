import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import rootReducer from './rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const middlewares = [logger];

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(...middlewares)));
// const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;