import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBook, getBooks } from '../redux/bookSlice';

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
      dispatch(postBook([title, author, category]))
        .then(() => {
          dispatch(getBooks());
          setTitle('');
          setAuthor('');
          setCategory('');
        })
        .catch((error) => error);
    }
  };

  return (
    <div className="book-form">
      <div>
        <h2>ADD NEW BOOK</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
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
              <option value="Economy">Economy</option>
            </select>
            <button type="submit">ADD BOOK</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
