/*eslint-disable*/
import React from 'react';
import Book from './Book';
import BookForm from './BookForm';
import {useSelector, useDispatch} from 'react-redux';
import {removeBook} from '../redux/bookSlice';

function BookList() {
  const bookList = useSelector(state => state.books.books);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(removeBook({id}));
  };

  return (
    <div>
      <ul>
        {bookList.map(book => (
          <Book
            key={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
            id={book.item_id}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      <BookForm />
    </div>
  );
}

export default BookList;
