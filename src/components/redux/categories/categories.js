const CHECK_STATUS = 'books/categories/CHECK_STATUS';

export const checkStatus = (payload) => ({
  type: CHECK_STATUS,
  payload,
});
const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};
export default categoriesReducer;
