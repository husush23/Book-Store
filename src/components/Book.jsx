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
    <>
      <div className='book'>
        <div className='p-1'>
          <div className='titles'>
            <h4 className='category'>{category}</h4>
            <h2 className='title'>{title}</h2>
            <p className='author'>{author}</p>
          </div>
          <div className='buttons'>
            <button className='btn comment-btn'>Comment</button>
            <button
              onClick={() => handleDel()}
              type='button'
              className='btn remove-btn'
            >
              Remove
            </button>
            <button className='btn edit-btn'>Edit</button>
          </div>
        </div>
        <div className='p-2'>
          <div className='circle'>Circle</div>
          <div className='infos'>
            <span>0%</span>
            <span>completed</span>
          </div>
        </div>
        <div className='p-3'>
          <p className='chpt'>Current chapter</p>
          <p className='intro'>Introduction</p>
          <button className='btn-update'>Update process</button>
        </div>
      </div>
      {/* <div>
        <ul>
          <li>
            {title} by
            {author} {category}
            &nbsp;
            <button>Delete</button>
          </li>
        </ul>
      </div> */}
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
