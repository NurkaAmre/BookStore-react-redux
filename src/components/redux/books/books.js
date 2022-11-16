const ADD_BOOK = 'Books/books/ADD_BOOK';
const REMOVE_BOOK = 'Books/books/REMOVE_BOOK';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = (state = [{
  id: '1', title: 'The psychoanalyst', author: 'John Katzenbach', category: 'Thriller',
}], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
