import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { contacts: '' },
  reducers: {
    onInputChangeAction: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
});

export const { onInputChangeAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
