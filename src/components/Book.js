import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './Bookstore';
import AddNewBook from './Addbooks';

const Bookstore = () => {
  const books = useSelector((store) => store.books);
  return (
    <>
      {
        books.map(
          (book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              category={book.category}
              author={book.author}
            />
          ),
        )
      }
      <AddNewBook />
    </>
  );
};

export default Bookstore;
