import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PnjDXNBIRTpAQRM9vxUD/books';
const ADD_BOOK = 'Books/books/ADD_BOOK';
const REMOVE_BOOK = 'Books/books/REMOVE_BOOK';
const LOAD_BOOKS = 'Books/books/LOAD_BOOKS';

export const loadBooks = createAsyncThunk((LOAD_BOOKS), async () => {
  const res = await axios.get(url);
  const resData = res.data;
  const arrMap = Object.keys(resData).map((id) => ({
    id,
    author: resData[id][0].author,
    title: resData[id][0].title,
    category: resData[id][0].category,
  }));
  return arrMap;
});

export const addBook = createAsyncThunk((ADD_BOOK), async (payload, thunkApi) => {
  const {
    id,
    author,
    category,
    title,
  } = payload;
  await axios.post(url, {
    item_id: id,
    author,
    title,
    category,
  });
  thunkApi.dispatch(loadBooks());
});

export const removeBook = createAsyncThunk((REMOVE_BOOK), async (id) => {
  await axios.delete(`${url}/${id}`);
  return id;
});

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [...state];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.id !== action.payload);
    case `${LOAD_BOOKS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
