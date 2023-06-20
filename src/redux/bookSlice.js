/*eslint-disable*/
import {createSlice} from '@reduxjs/toolkit';
import {nanoid} from 'nanoid';

const initialBook = [];
const bookSlice = createSlice({
  name: 'book',
  initialBook,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: {
        id: nanoid(),
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      },
    }),
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter(book => book.id !== action.payload.id),
    }),
  },
});

export default bookSlice.reducer;
export const {addBook, removeBook} = bookSlice.actions;
