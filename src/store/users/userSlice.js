import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://randomuser.me/api/?results=5';

const initialState = {
  results: [],
  isLoading: true,
};

export const getResultItems = createAsyncThunk('result/getResultItems', async (thunkAPI) => {
  try {
    const resp = await axios(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong...');
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [getResultItems.pending]: (state) => {
      state.isLoading = true
    },
    [getResultItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.results = action.payload;
    },
    [getResultItems.rejected]: (state, action) => {
      state.isLoading = false;
    }
  }
});

export default userSlice.reducer;