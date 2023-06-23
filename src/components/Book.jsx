import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delBook, getBooks } from '../redux/bookSlice';

function Book(props) {
  const {
    title, author, id, category,
  } = props;
  const dispatch = useDispatch();

  const handleDel = async () => {
    dispatch(delBook(id));
    dispatch(getBooks());
  };

  return (
    <div className="book">
      <div className="p-1">
        <div className="titles">
          <h4 className="category">{category}</h4>
          <h2 className="title">{title}</h2>
          <p className="author">{author}</p>
        </div>
        <div className="buttons">
          <button className="btn comment-btn" type="submit">
            Comment
          </button>
          <button
            onClick={() => handleDel()}
            type="button"
            className="btn remove-btn"
          >
            Remove
          </button>
          <button className="btn edit-btn" type="submit">
            Edit
          </button>
        </div>
      </div>
      <div className="p-2">
        <div className="circle">
          <svg>
            <circle cx="20" cy="20" r="20" />
            <circle cx="20" cy="20" r="20" />
          </svg>
        </div>
        <div className="infos">
          <h3>8%</h3>
          <span>completed</span>
        </div>
      </div>
      <div className="p-3">
        <p className="chpt">Current chapter</p>
        <p className="intro">Introduction</p>
        <button className="btn-update" type="submit">
          Update process
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
