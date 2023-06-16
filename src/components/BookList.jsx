import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

function BookList() {
  const randomBooks = [
    { title: 'Book1', id: 1, author: 'Ahmed' },
    { title: 'Book2', id: 2, author: 'Mehmet' },
    { title: 'Book3', id: 3, author: 'Ali' },
    { title: 'Book4', id: 4, author: 'John' },
    { title: 'Book5', id: 5, author: 'Fordy' },
  ];

  return (
    <div>
      <ul>
        {randomBooks.map((book) => (
          <Book title={book.title} key={book.id} author={book.author} />
        ))}
      </ul>
      <BookForm />
    </div>
  );
}

export default BookList;
