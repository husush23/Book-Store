/*eslint-disable*/
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import {getBooks, delBook} from '../redux/bookSlice';

function BookList() {
  // Books data
  const {books, isLoading} = useSelector(state => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const booksList = Object.entries(books).reduce((bookArray, [id, items]) => {
    const booksIds = items.map(book => ({...book, id}));
    return [...bookArray, ...booksIds];
  }, []);

  return (
    <div>
      <ul>
        {booksList.map(book => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            id={book.id}
          />
        ))}
      </ul>
      <BookForm />
    </div>
  );
}

export default BookList;
