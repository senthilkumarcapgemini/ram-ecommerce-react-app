import {configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension'
import rootReducers from './reducer';




const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(/* your custom middleware */),
        devTools: process.env.NODE_ENV !== 'production'
        
});

export default store;
