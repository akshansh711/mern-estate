import {configureStore, combineReducers} from '@reduxjs/toolkit';
import useReducer from './user/userSlice.js';
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({user: useReducer})

const persistConfig = {
     key: 'root',
     storage,
     version: 1
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        })
    
})

export const persistor = persistStore(store);

// persistReducer is used to store the data in local storage of the browser
// so that the user doesnt have to login again and again every time the page refreshes