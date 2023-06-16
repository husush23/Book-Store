import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;
  return (
    <div>
      <ul>
        <li>
          {title}
          {' '}
          by
          {author}
          <button type="button">Delete</button>
        </li>
      </ul>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
