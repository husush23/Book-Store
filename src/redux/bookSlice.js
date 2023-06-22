/*eslint-disable*/
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {nanoid} from 'nanoid';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Pi1iIe9jypp8kdtYJnwF/books`;

const initialState = {
  books: [],
  isLoading: false,
};

export const getBooks = createAsyncThunk('books/getBooks', async thunk => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    return thunk.rejectWithValue('Something went wrong');
  }
});

export const postBook = createAsyncThunk(
  'book/postBook',
  async (book, thunk) => {
    const newBook = {
      title: book[0],
      author: book[1],
      item_id: nanoid(),
      category: book[2],
    };

    try {
      const response = await axios.post(url, newBook);
      return response.data;
    } catch (error) {
      return thunk.rejectWithValue('Something went wrong');
    }
  }
);

export const delBook = createAsyncThunk('book/delBook', async (id, thunk) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
  } catch (error) {
    return thunk.rejectWithValue('Something went wrong');
  }
});

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
  extraReducers: builder => {
    builder.addCase(getBooks.pending, state => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getBooks.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      books: action.payload,
    }));
    builder.addCase(getBooks.rejected, state => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(postBook.pending, state => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(postBook.fulfilled, state => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(postBook.rejected, state => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(delBook.pending, state => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(delBook.fulfilled, state => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(delBook.rejected, state => ({
      ...state,
      isLoading: false,
    }));
  },
});

export default bookSlice.reducer;
export const {addBook, removeBook} = bookSlice.actions;
