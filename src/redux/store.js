import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import rootReducer from './rootReducer'
import { persistStore } from 'redux-persist'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(...middlewares)));
// const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = new persistStore(store);

export default store;