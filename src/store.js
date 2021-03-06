import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducer/index'

const initialState = {};
const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

export default createStore(
    rootReducer,
    initialState,
    composedEnhancers,
);
