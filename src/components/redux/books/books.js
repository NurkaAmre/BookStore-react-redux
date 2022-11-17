const ADD_BOOK = 'Books/books/ADD_BOOK';
const REMOVE_BOOK = 'Books/books/REMOVE_BOOK';
const LOAD_BOOKS = 'Books/books/LOAD_BOOKS';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const loadBooks = () => ({
  type: LOAD_BOOKS,
});

const initialState = [{
  id: '1', title: 'The psychoanalyst', author: 'John Katzenbach', category: 'Thriller',
}];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case LOAD_BOOKS:
      return state;
    default:
      return state;
  }
};

export default booksReducer;
