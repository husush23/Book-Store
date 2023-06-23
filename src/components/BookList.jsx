import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import { getBooks } from '../redux/bookSlice';

function BookList() {
  // Books data
  const { books } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const booksList = Object.entries(books).reduce((bookArray, [id, items]) => {
    const booksIds = items.map((book) => ({ ...book, id }));
    return [...bookArray, ...booksIds];
  }, []);

  return (
    <div className="books">
      {booksList.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
          id={book.id}
        />
      ))}

      <BookForm />
    </div>
  );
}

export default BookList;
