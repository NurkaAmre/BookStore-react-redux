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
      <section className="add-section">
        <h3>ADD NEW BOOK</h3>
        <form className="d-flex" onSubmit={handleSbt}>
          <input name="title" className="title-input hover" onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Book title" value={titleA} />
          <input name="author" className="author-input hover" onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Author" value={authorA} />
          <select name="category" className="category-input hover" onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Category" value={categoryA}>
            <option value="" hidden>Genre</option>
            <option value="Action">Action</option>
            <option value="Programming">Programming</option>
            <option value="Economy">Economy</option>
            <option value="Math">Math</option>
            <option value="Thriller">Thriller</option>
            <option value="Cartoon">Cartoon</option>
            <option value="Religion">Religion</option>
          </select>
          <button
            className="add-button"
            type="submit"
          >
            ADD BOOK
          </button>
        </form>
      </section>
    </>
  );
};

export default AddNewBook;
