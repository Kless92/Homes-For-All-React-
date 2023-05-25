import {configureStore} from '@reduxjs/toolkit';
import { frontpageReducer } from '../features/display/displaySlice';
import { newsandupdatesReducer } from '../features/news&updates/newsandupdatesSlice';
import { dataReducer } from '../features/Voll&Don/dataSlice';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        frontpage: frontpageReducer,
        newsandupdates: newsandupdatesReducer,
        data: dataReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});