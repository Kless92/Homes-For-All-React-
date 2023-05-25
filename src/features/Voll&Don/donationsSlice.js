import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';

export const postData = createAsyncThunk(
    'dontationData/postData',
    async (dontationData, {dispatch}) => {
        const response = await fetch(baseUrl+'dontationData', {
            method:'POST', 
            body:JSON.stringify(dontationData),
            headers:{'Content-Type':'application/json'}
        })
        if(!response.ok){
            return Promise.reject(response.status);
        }
        const data = await response.json();
        dispatch(addData(data));
    }
);

const initialState = {
    dataArray: [],
    isLoading: true,
    errMsg: ''
};

const dontationSlice = createSlice({
    name: 'dontationData',
    initialState,
    reducers: {
            addData: (state, action) => {
                console.log('addData action.payload: ', action.payload);
                console.log('addData state.dataArray: ', state.dataArray);
                const newData = {
                    id: state.dataArray.length + 1, 
                    ...action.payload
                };
                state.dataArray.push(newData);
            }
    },
    extraReducers: {
        [postData.rejected]: (state, action) => {
            alert('Your posted info could not be posted\nError.'+
            (action.error ? action.error.message: 'Fetch failed'));
        }
    }
});

export const dataReducer = dontationSlice.reducer;

export const {addData} = dontationSlice.actions;

export const selectDataById = (dataId) => (state) => {
    return state.dontationData.dataArray.filter((dontationData) => dontationData.dataId === parseInt(dataId));
};