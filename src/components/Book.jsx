import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const {
    title, author, id, handleDelete, category,
  } = props;

  const handleClick = () => {
    handleDelete(id);
  };

  return (
    <div>
      <ul>
        <li>
          {title}
          {' '}
          by
          {author}
          {' '}
          {category}
          &nbsp;
          <button onClick={handleClick} type="submit">
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
  handleDelete: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
