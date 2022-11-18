import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from './redux/books/books';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [titleA, setTitle] = useState('');
  const [authorA, setAuthor] = useState('');
  const [categoryA, setCategory] = useState('');

  const handleSbt = (e) => {
    e.preventDefault();
    const book = {
      id: uuid(),
      title: titleA,
      author: authorA,
      category: categoryA,
    };
    setTitle('');
    setAuthor('');
    setCategory('');
    if (titleA && authorA && categoryA) {
      dispatch(addBook(book));
    }
  };

  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSbt}>
        <input name="title" className="title-input" onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Book title" value={titleA} />
        <input name="author" className="author-input" onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Author" value={authorA} />
        <input name="category" className="category-input" onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Category" value={categoryA} />
        <button
          className="add-button"
          type="submit"
        >
          Add book
        </button>
      </form>
    </>
  );
};

export default AddNewBook;
