/*eslint-disable*/
import {createSlice} from '@reduxjs/toolkit';
import {nanoid} from 'nanoid';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const {title, author, category} = action.payload;
      state.books.push({
        item_id: nanoid(),
        title,
        author,
        category,
      });
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(
        book => book.item_id !== action.payload.id
      );
    },
  },
});

export default bookSlice.reducer;
export const {addBook, removeBook} = bookSlice.actions;
