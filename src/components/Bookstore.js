import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from './redux/books/books';

const BookCard = (props) => {
  const dispatch = useDispatch();
  const {
    title,
    author,
    id,
  } = props;

  const onClck = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>

      <p>category</p>
      <h2>{title}</h2>
      <blockquote>{author}</blockquote>

      <ul>
        <li><p>Comments</p></li>
        <li>
          <button type="button" className="delete" onClick={() => onClck(id)}>Remove</button>
        </li>
        <li><p>Edit</p></li>
      </ul>

      <div>
        <p>64 %</p>
        <p>Completed</p>
      </div>

      <div>
        <p>Current chapter</p>
        <p>Chapter 17</p>
        <button type="button">Update progress</button>
      </div>

    </div>
  );
};

BookCard.defaultProps = {
  title: 'title',
  author: 'author',
  id: 'id',
};

BookCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default BookCard;
