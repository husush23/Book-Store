import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';

function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else if (e.target.name === 'author') {
      setAuthor(e.target.value);
    } else if (e.target.name === 'category') {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author && category) {
      dispatch(addBook({ title, author, category }));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="author"
          value={author}
          onChange={handleChange}
          placeholder="Author"
        />
        <select
          name="category"
          value={category}
          onChange={handleChange}
          placeholder="Category"
        >
          <option value="">Select Category</option>
          <option value="science">Science</option>
          <option value="fiction">Fiction</option>
          <option value="math">Math</option>
          <option value="story">Story</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
