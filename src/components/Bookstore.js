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
    category,
  } = props;

  const onClck = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="book-card d-flex">
      <div className="left-part flex-column">
        <p className="category">{category}</p>
        <h2 className="book-title">{title}</h2>
        <blockquote className="book-author">{author}</blockquote>
        <div className="options d-flex">
          <p className="option">Comments</p>
          <div className="line" />
          <button type="button" className="delete" onClick={() => onClck(id)}>Remove</button>
          <div className="line" />
          <p className="option">Edit</p>
        </div>
      </div>
      <div className="center-part d-flex">
        <div className="circular-progress" />
        <div className="data">
          <p className="percentage">64 %</p>
          <p className="completed gray">Completed</p>
        </div>
      </div>
      <div className="big-line" />
      <div className="right-part flex-column">
        <p className="gray">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 17</p>
        <button type="button" className="update-btn">UPDATE PROGRESS</button>

      </div>
    </div>
  );
};

BookCard.defaultProps = {
  title: 'title',
  author: 'author',
  id: 'id',
  category: 'category',
};

BookCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
};

export default BookCard;
