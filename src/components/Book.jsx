/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {delBook, getBooks} from '../redux/bookSlice';

function Book(props) {
  const {title, author, id, category} = props;
  const dispatch = useDispatch();

  const handleDel = async () => {
    dispatch(delBook(id));
    dispatch(getBooks());
  };

  return (
    <div>
      <ul>
        <li>
          {title} by {author} {category}&nbsp;
          <button onClick={() => handleDel()} type='button'>
            Delete
          </button>
        </li>
      </ul>
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
