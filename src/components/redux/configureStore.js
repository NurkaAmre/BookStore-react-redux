import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./books/books";
import { categoryReducer } from "./categories/categories";

export default configureStore ({
    reducer: {
        updateBooks: booksReducer,
        updateCategory: categoryReducer,
    }
})