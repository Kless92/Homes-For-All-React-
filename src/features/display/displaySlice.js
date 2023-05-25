import {FRONTPAGE} from '../../app/shared/FRONTPAGE';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchFrontPage = createAsyncThunk(
    'frontpage/fetchFrontPage',
    async () => {
        const response = await fetch(baseUrl + 'frontpage');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    frontpageArray: [],
    isLoading: true,
    errMsg: ''
};

const displaySlice = createSlice({
    name: 'frontpage',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchFrontPage.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchFrontPage.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.frontpageArray = mapImageURL(action.payload);
        },
        [fetchFrontPage.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const frontpageReducer = displaySlice.reducer;

export const selectFeaturedFrontPage = (state) => {
    return state.frontpage.frontpageArray.find((news) => news.featured)
};
