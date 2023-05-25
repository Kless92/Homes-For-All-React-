import {NEWSANDUPDATES} from '../../app/shared/NEWSANDUPDATES';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchNews = createAsyncThunk(
    'newsandupdates/fetchNews',
    async () => {
        const response = await fetch(baseUrl + 'newsandupdates');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    newsArray: [],
    isLoading: true,
    errMsg: ''
};

const newsandupdatesSlice = createSlice({
    name: 'newsandupdates',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchNews.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchNews.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.newsArray = mapImageURL(action.payload);
        },
        [fetchNews.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const newsandupdatesReducer = newsandupdatesSlice.reducer;

export const selectAllNews = (state) => {
    return state.newsandupdates.newsArray;
};

export const selectNewsById = (id) => (state) => {
    return state.newsandupdates.newsArray.find((news) => news.id === parseInt(id));
};


