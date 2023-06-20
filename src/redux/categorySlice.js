/*eslint-disable*/
import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {
    category: '',
  },
];
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkCategory: state => ({
      ...state,
      category: 'Under construction',
    }),
  },
});

export default categorySlice.reducer;
export const {checkCategory} = categorySlice.actions;
