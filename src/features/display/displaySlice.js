import {FRONTPAGE} from '../../app/shared/FRONTPAGE'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    frontpageArray: FRONTPAGE
};

const displaySlice = createSlice({
    name: 'frontpage',
    initialState
});

export const frontpageReducer = displaySlice.reducer;

export const selectAllFrontPages = (state) => {
    return state.frontpage.frontpageArray;
};

export const selectFrontPageById = (id) => (state) => {
    return state.frontpage.frontpageArray.find((news) => news.id === id);
};

export const selectFeaturedFrontPage = (state) => {
    return state.frontpage.frontpageArray.find((news) => news.featured);
};
