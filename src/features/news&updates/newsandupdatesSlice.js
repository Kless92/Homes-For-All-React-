import {NEWSANDUPDATES} from '../../app/shared/NEWSANDUPDATES';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    newsandupdatesArray: NEWSANDUPDATES
};

const newsandupdatesSlice = createSlice({
    name: 'newsandupdates',
    initialState
});

export const newsandupdatesReducer = newsandupdatesSlice.reducer;

export const selectAllNews = (state) => {
    return state.newsandupdates.newsandupdatesArray;
};

export const selectNewsById = (id) => (state) => {
    return state.newsandupdates.newsandupdatesArray.find((news) => news.id === parseInt(id));
};

export const selectFeaturedNews = (state) => {
    return state.newsandupdates.newsandupdatesArray.find((news) => news.featured);
};

