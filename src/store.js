import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/index';


let store = createStore(reducers, applyMiddleware(logger));


export default store;