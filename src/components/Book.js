import React from 'react';
import PropTypes from 'prop-types';

const Book = ({bookData}) => (
    <>
     <div>
        <p>{bookData.category}</p>
        <h2>{bookData.title}</h2>
        <q>{bookData.author}</q>
        <div>
            <button>Comments</button>
            <button>Remove</button>
            <button>Edit</button>
        </div>
    </div>

    <div>
     <div><img /></div>
     <p>64%</p>
     <p>Completed</p>
    </div>

    <div>
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button>Update Progress</button>
    </div>

    </>
  );
 

 Book.propTypes = {
    bookData: PropTypes.shape.isRequired,
 };

export default Book;
