/*eslint-disable*/
import {createSlice} from '@reduxjs/toolkit';
import {nanoid} from 'nanoid';

const initialState = [
  {
    category: '',
  },
];
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkCategory: (state, action) => ({
      ...state,
      category: 'Under construction',
    }),
  },
});

export default categorySlice.reducer;
export const {checkCategory} = categorySlice.actions;
