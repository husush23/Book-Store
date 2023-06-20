import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import bookReducer from './bookSlice';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    books: bookReducer,
  },
});

export default store;
