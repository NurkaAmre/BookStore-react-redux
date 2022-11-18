const CHECK_STATUS = 'CHECK_STATUS';

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (state = '', action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under constructor';
    default:
      return state;
  }
};

export default categoriesReducer;
