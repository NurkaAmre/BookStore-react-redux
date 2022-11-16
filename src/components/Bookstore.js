import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from './redux/books/books';

const BookCard = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div>

      <p>{category}</p>
      <h2>{title}</h2>
      <blockquote>{author}</blockquote>

      <ul>
        <li><p>Comments</p></li>
        <li>
          <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
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

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookCard;
