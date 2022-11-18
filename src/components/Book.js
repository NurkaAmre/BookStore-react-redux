import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddNewBook from './Addbooks';
import BookCard from './Bookstore';
import { loadBooks } from './redux/books/books';

const Books = () => {
  const books = useSelector((store) => store.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  return (
    <>
      {
        books.map(
          (book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          ),
        )
      }
      <div className="horizontal-line" />
      <AddNewBook />
    </>
  );
};

export default Books;
