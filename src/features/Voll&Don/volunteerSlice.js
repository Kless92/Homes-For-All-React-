import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';

export const postData = createAsyncThunk(
    'volunteerData/postData',
    async (volunteerData, {dispatch}) => {
        const response = await fetch(baseUrl+'volunteerData', {
            method:'POST', 
            body:JSON.stringify(volunteerData),
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

const volunteerSlice = createSlice({
    name: 'volunteerData',
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

export const dataReducer = volunteerSlice.reducer;

export const {addData} = volunteerSlice.actions;

export const selectDataById = (dataId) => (state) => {
    return state.volunteerData.dataArray.filter((volunteerData) => volunteerData.dataId === parseInt(dataId));
};