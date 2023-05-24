import {configureStore} from '@reduxjs/toolkit';
import { frontpageReducer } from '../features/display/displaySlice';
import { newsandupdatesReducer } from '../features/news&updates/newsandupdatesSlice';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        frontpage: frontpageReducer,
        newsandupdates: newsandupdatesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});