/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const {title, author, id, handleDelete} = props;

  const handleClick = () => {
    handleDelete(id);
  };

  return (
    <div>
      <ul>
        <li>
          {title} by {author}&nbsp;
          <button onClick={handleClick}>Delete</button>
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
};

export default Book;
